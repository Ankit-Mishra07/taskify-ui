import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList = [];
  all_task_subtask_list = [];
  constructor(
    public _webService: WebService
  ) { }

  fetchUserTaskList(assignedToId) {
    return this._webService.commonGetMethod(`/task/getusertasklist/${assignedToId}`)
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
