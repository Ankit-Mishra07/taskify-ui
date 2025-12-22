import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {

  taskIdToCreateUpdateSubTask!:string;
  constructor(
    public _webService: WebService
  ) { }

  createSubTask(parentTaskId, data) {
    return this._webService.commonPostMethod(`/task/subtask/create/${parentTaskId}`, data);
  }

  updateSubTask(subTaskId, data) {
    return this._webService.commonPatchMethod(`/task/subtask/update/${subTaskId}`, data)
  }
}
