import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { WorklogService } from 'src/app/services/worklog.service';

@Component({
  selector: 'app-worklog-create-edit',
  templateUrl: './worklog-create-edit.component.html',
  styleUrls: ['./worklog-create-edit.component.scss']
})
export class WorklogCreateEditComponent implements OnInit {
  @Input('mode') mode;
  @Input('taskData') taskData;
  @Input('workLogEditData') workLogEditData?;
  @Output('closePopup') closePopup = new EventEmitter();
  userId = this._commonService.getUserId();
  worklogForm!:FormGroup;

  isLoading = false;

  constructor(
    public _commonService: CommonService,
    public _worklogService: WorklogService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    if(!this.taskData) {
      this._toaster.pop('error', 'Something went wrong');
      this.closePopup.emit('');
      return;
    }
    this.mode = this.mode ? this.mode : 'Create';
    if(this.mode === 'Edit' && this.workLogEditData) {
      this.updateLogForm();
    }else {
      this.initForm();
    }
  }

  initForm() {
    this.worklogForm = new FormGroup({
      timeSpent: new FormControl('0h', [Validators.required, Validators.pattern(/^\d+(\.\d+)?[hm]$/)]),
      dateTime: new FormControl(new Date(), Validators.required),
      description: new FormControl(''),
      userId: new FormControl(this.userId),
      taskId: new FormControl(this.taskData._id),
    })
  }

  updateLogForm() {
    this.worklogForm = new FormGroup({
      timeSpent: new FormControl(this._worklogService.convertSecondsToLogTime(this.workLogEditData.timeSpent), [Validators.required, Validators.pattern(/^\d+(\.\d+)?[hm]$/)]),
      dateTime: new FormControl(new Date(this.workLogEditData.dateTime), Validators.required),
      description: new FormControl(this.workLogEditData.description),
      userId: new FormControl(this.userId),
      taskId: new FormControl(this.workLogEditData.taskId),
    })
  }

  closeworklogPopup() {
    this._worklogService.selectedTaskData = null;
    this._worklogService.worklogPopupMode = '';
    this._worklogService.workLogEditData = null;
    this._worklogService.openWorklogPopup = false;
    this.closePopup.emit('');
  }

  saveWorklog() {
    
    if(!this.worklogForm.valid) {
      return;
    }
    if (!this._worklogService.isValidDuration(this.worklogForm.get('timeSpent').value)) {
      this._toaster.pop('error', 'Invalid time')
      return;
    }
    if (!this._commonService.isValidDate(this.worklogForm.get('dateTime').value)) {
      this._toaster.pop('error', 'Invalid date')
      return;
    }
    let payload = {
      timeSpent: this._worklogService.convertLogTime(this.worklogForm.get('timeSpent').value),
      dateTime: this.worklogForm.get('dateTime').value,
      description: this.worklogForm.get('description').value,
      userId: this.worklogForm.get('userId').value,
      taskId: this.mode === 'Edit' ? this.workLogEditData.taskId :this.worklogForm.get('taskId').value
    }
    this.isLoading = true;
    if(this.mode === 'Create') {
      this._worklogService.postworkLog(this.userId, payload.taskId, payload).subscribe((res:any) => {
        if(res.success) {
          this._toaster.pop('success', res.message);
          this.closeworklogPopup();
        }else {
          this._toaster.pop('error', res.message);
        }
        this.isLoading = false;
      }, error => {
        this._toaster.pop('error', 'Something went wrong');
        this.isLoading = false;
      });
    } 
    
    else if (this.mode === 'Edit') {
      this._worklogService.patchWorkLog(this.workLogEditData._id, payload).subscribe((res:any) => {
        if (res.success) {
          this._toaster.pop('success', res.message);
          this.closeworklogPopup();
        } else {
          this._toaster.pop('error', res.message);
        }
        this.isLoading = false;
      }, error => {
        this._toaster.pop('error', 'Something went wrong');
        this.isLoading = false;
      })
    }

    
  }


}
