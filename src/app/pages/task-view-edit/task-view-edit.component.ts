import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private routeSub: Subscription;

  isLoading = false;
  currentTaskData = null;

  constructor(
    private route: ActivatedRoute,
    public _taskService: TaskService,
    public _subTaskService: SubtaskService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.currentParamTaskId = params.get('id')
    });
    if(this.currentParamTaskId) {
      this.getTaskById();
    }
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

}
