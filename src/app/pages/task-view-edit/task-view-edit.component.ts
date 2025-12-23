import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Subscription } from 'rxjs';
import { ConfirmationPopupComponent } from 'src/app/common/confirmation-popup/confirmation-popup.component';
import { CommonService } from 'src/app/services/common.service';
import { SubtaskService } from 'src/app/services/subtask.service';
import { TaskService } from 'src/app/services/task.service';
import { WebService } from 'src/app/services/web.service';
import { WorklogService } from 'src/app/services/worklog.service';

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

  userId = this._commonService.getUserId();

  constructor(
    private route: ActivatedRoute,
    public _taskService: TaskService,
    public _subTaskService: SubtaskService,
    public _toaster: ToasterService,
    public _commonService: CommonService,
    public router: Router,
    public _worklogService: WorklogService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.currentParamTaskId = params.get('id')
    });
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.currentQueryTasktype = params['type']
      if ((this.currentQueryTasktype == 'Task' || this.currentQueryTasktype == 'Bug')) {
        this.currentQueryTasktype = "parenttask";
      }
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
    this._subTaskService.fetchSubTaskById(this.currentParamTaskId).subscribe((res: any) => {
      if (res.success) {
        this.currentTaskData = res.data;
      } else {
        this._toaster.pop('error', res.message);
      }
    }, error => {
      this._toaster.pop('error', 'Something went wrong')
    })
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
    this._subTaskService.taskIdToCreateUpdateSubTask = subdata._id;

  }

  editWorkLog(taskData, logData) {
    this._worklogService.selectedTaskData = taskData;
    this._worklogService.worklogPopupMode = 'Edit';
    this._worklogService.workLogEditData = logData;
    this._worklogService.openWorklogPopup = true;
  }
  closeWorklogPopup() {
    this._worklogService.selectedTaskData = null;
    this._worklogService.worklogPopupMode = '';
    this._worklogService.workLogEditData = null;
    this._worklogService.openWorklogPopup = false;
    this.fetchByIdAndType();
  }
  deleteWorkLog(log) {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '350px',
      data: {
        title: 'Delete Work Log',
        message: 'Are you sure you want to delete this work log?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._worklogService.deleteWorkLog(log._id).subscribe((res:any) => {
          if(res.success) {
            this._toaster.pop('success', res.message);
            this.fetchByIdAndType();
          }else {
            this._toaster.pop('success', res.message);
          }
        })
      }
    });
  }
  editCurrentTask() {
    this._taskService.taskPopupUpdateData = this.currentTaskData;
    this._taskService.taskPopupModeType = this.currentQueryTasktype == 'parenttask' ? 'Task' : 'Sub-Task';
    this._taskService.taskPopupMode = 'Edit';
    this._taskService.showCreateEditTaskPopup = true;
    this._subTaskService.taskIdToCreateUpdateSubTask = '';

  }
  enterWorkLog() {
    this._worklogService.selectedTaskData = this.currentTaskData;
    this._worklogService.worklogPopupMode = 'Create';
    this._worklogService.workLogEditData = null;
    this._worklogService.openWorklogPopup = true;
  }

}
