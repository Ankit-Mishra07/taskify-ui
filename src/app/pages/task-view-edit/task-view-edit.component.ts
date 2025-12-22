import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Subscription } from 'rxjs';
import { SubtaskService } from 'src/app/services/subtask.service';
import { TaskService } from 'src/app/services/task.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-task-view-edit',
  templateUrl: './task-view-edit.component.html',
  styleUrls: ['./task-view-edit.component.scss']
})
export class TaskViewEditComponent implements OnInit {

  currentParamTaskId: string | null;
  currentQueryTasktype:string | null;
  private routeSub: Subscription;

  isLoading = false;
  currentTaskData = null;

  constructor(
    private route: ActivatedRoute,
    public _taskService: TaskService,
    public _subTaskService: SubtaskService,
    public _toaster: ToasterService,
    public router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.currentParamTaskId = params.get('id')
    });
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.currentQueryTasktype = params['type']
    });
    this.fetchByIdAndType();
  }

  fetchByIdAndType() {
    if (this.currentParamTaskId && this.currentQueryTasktype == 'parenttask') {
      this.getTaskById();
    } else if (this.currentParamTaskId && this.currentQueryTasktype == 'subtask') {
      this.getSubTaskById();
    }else {
      this._toaster.pop('error', 'Something went wrong');
    }
  }
  getSubTaskById() {

  }
  getTaskById() {
    this._taskService.fetchOneTaskById(this.currentParamTaskId).subscribe((res:any) => {
      if(res.success) {
        this.currentTaskData = res.data;
      }else {
        this._toaster.pop('error', res.message);
      }
    }, error => {
      this._toaster.pop('error', 'Something went wrong')
    })
  }

  addSubtask() {
    this._taskService.taskPopupUpdateData = null;
    this._subTaskService.taskIdToCreateUpdateSubTask = this.currentParamTaskId;
    this._taskService.taskPopupModeType = 'Sub-Task';
    this._taskService.taskPopupMode = 'Create';
    this._taskService.showCreateEditTaskPopup = true;
  }
  onsubtaskPopupClose() {
    this._taskService.taskPopupUpdateData = null;
    this._subTaskService.taskIdToCreateUpdateSubTask = '';
    this._taskService.taskPopupModeType = '';
    this._taskService.taskPopupMode = '';
    this._taskService.showCreateEditTaskPopup = false;
    this.fetchByIdAndType();
  }

  navigateSubTask(url) {
    window.open(url +  '?type=subtask');
  }

  editSubTask(subdata) {
    this._taskService.taskPopupUpdateData = subdata;
    this._taskService.taskPopupModeType = 'Sub-Task';
    this._taskService.taskPopupMode = 'Edit';
    this._taskService.showCreateEditTaskPopup = true;
  }

}
