import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList = [];
  all_task_subtask_list = [];

  
  taskPopupMode = '';
  taskPopupModeType = 'Task';
  taskPopupUpdateData:any;
  showCreateEditTaskPopup = false
  
  constructor(
    public _webService: WebService
  ) { }

  fetchUserTaskList(assignedToId) {
    return this._webService.commonGetMethod(`/task/getusertasklist/${assignedToId}`)
  }

  fetchAllTaskList(query) {
    return this._webService.commonGetMethod(`/gettasksubtasklist?`)
  }

  createNewTask(data) {
    return this._webService.commonPostMethod('/task/create', data)
  }

  updateTask(id, data) {
    return this._webService.commonPatchMethod(`/task/update/${id}`, data);
  }

  getAllTask_SubTaskList(query) {
    return this._webService.commonGetMethod(`/task/gettasksubtasklist?${query}`)
  }

  combineSubtaskToTask(tasklist) {
    let list = [];
    for(let task of tasklist) {
      list.push({...task});
      task.subTasks.forEach(el => {
        list.push({...el});
      })
    }
    return list;
  }

}
