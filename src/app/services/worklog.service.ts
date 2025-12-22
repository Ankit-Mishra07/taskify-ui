import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  selectedTaskData:any = null;
  openWorklogPopup = false;
  worklogPopupMode = '';
  workLogEditData = null;
  constructor(
    public _webService: WebService
  ) { }

  isValidDuration(value) {
    return /^\d+(\.\d+)?[hm]$/.test(value);
  }

  convertLogTime(time) {
    const regex = /^(\d+(?:\.\d+)?)([hm])$/;
    const match = time.match(regex);

    if (!match) {
      console.log('Invalid time format');
      return 0;
    }

    const value = parseFloat(match[1]);
    const unit = match[2];

    if (unit === 'h') {
      return value * 60 * 60;
    }

    return value * 60;
  }
  convertSecondsToLogTime(seconds) {
    if (!seconds || seconds <= 0) return '0h';

    // Prefer hours if >= 1 hour
    if (seconds >= 3600) {
      const hours = seconds / 3600;
      return `${parseFloat(hours.toFixed(2))}h`;
    }

    // Otherwise return minutes
    const minutes = seconds / 60;
    return `${parseFloat(minutes.toFixed(2))}m`;
  }


  postworkLog(userId, taskId, data) {
    return this._webService.commonPostMethod(`/worklog/createlog/${userId}/${taskId}`, data);
  }
  
}
