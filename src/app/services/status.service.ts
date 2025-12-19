import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  statusList = []

  constructor(
    public _webService: WebService
  ) { }


  fetchStatusList() {
    return this._webService.commonGetMethod('/status/statuslist');
  }

  postStatus(payload) {
    return this._webService.commonPostMethod('/status/createstatus', payload);
  }
  patchStatus(payload) {
    return this._webService.commonPatchMethod('/status/updatestatus', payload);
  }
}
