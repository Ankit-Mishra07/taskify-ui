import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { StatusService } from 'src/app/services/status.service';
import { TaskService } from 'src/app/services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubtaskService } from 'src/app/services/subtask.service';

@Component({
  selector: 'app-task-create-edit',
  templateUrl: './task-create-edit.component.html',
  styleUrls: ['./task-create-edit.component.scss']
})
export class TaskCreateEditComponent implements OnInit {
  @Input('mode') mode;
  @Input('taskModeType') taskModeType;
  @Input('updateTaskData') updateTaskData?;
  @Input('taskIdToCreateUpdateSubTask') taskIdToCreateUpdateSubTask?;
  @Output('ontaskPopupClose') ontaskPopupClose = new EventEmitter();

  statusList = [];
  employeeList = [];
  userId = this._commonService.getUserId();
  isLoading = false;

  taskForm!:FormGroup;

  constructor(
    public _taskService: TaskService,
    public _commonService: CommonService,
    public _statusService: StatusService,
    public _employeeService: EmployeeService,
    public _toaster: ToasterService,
    public _subtaskService: SubtaskService
  ) { }

  ngOnInit() {
    this.mode = this.mode ? this.mode : 'Create';
    if(this.mode == 'Create') {
      this.initForm();
    }else if(this.mode == 'Edit') {
      this.updateForm();
    }
    if (this.taskModeType == 'Sub-Task') {
      this.taskForm.get('workType').setValue('Sub-Task');
      this.taskForm.get('workType').disable();
    }
    this.getAllStatusList();
    this.getAllEmployeeList();
  }

  initForm() {
    this.taskForm = new FormGroup({
      projectName: new FormControl('Front Office Management', Validators.required),
      workType: new FormControl('Task', Validators.required),
      status: new FormControl('Todo', Validators.required),
      summary: new FormControl('', Validators.required),
      description: new FormControl(''),
      createdBy: new FormControl(this.userId, Validators.required),
      priority: new FormControl('Medium', Validators.required),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      dueDate: new FormControl('', Validators.required),
      assignedTo: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      subTasks: new FormControl([]),
      workLogs: new FormControl([]),
    })
  }
  updateForm() {
    this.taskForm = new FormGroup({
      projectName: new FormControl(this.updateTaskData.projectName, Validators.required),
      workType: new FormControl(this.updateTaskData.workType, Validators.required),
      status: new FormControl(this.updateTaskData.status, Validators.required),
      summary: new FormControl(this.updateTaskData.summary, Validators.required),
      description: new FormControl(this.updateTaskData.description),
      createdBy: new FormControl(this.updateTaskData.createdBy._id, Validators.required),
      priority: new FormControl(this.updateTaskData.priority, Validators.required),
      startDate: new FormControl(this.updateTaskData.startDate),
      endDate: new FormControl(this.updateTaskData.endDate),
      dueDate: new FormControl(this.updateTaskData.dueDate, Validators.required),
      assignedTo: new FormControl(this.updateTaskData.assignedTo._id, Validators.required),
      reporter: new FormControl(this.updateTaskData.reporter._id, Validators.required),
      subTasks: new FormControl(this.updateTaskData.subTasks),
      workLogs: new FormControl(this.updateTaskData.workLogs),
    }); 
  }

  getAllStatusList() {
    this._statusService.fetchStatusList().subscribe((res:any) => {
      if(res.success) {
        this.statusList = res.data;
      }else {
        this._toaster.pop('error', res.message)
      }
    })
  }

  getAllEmployeeList() {
    this._employeeService.fetchAllEmployees().subscribe((response: any) => {
      try {
        if (response.success) {
          this.employeeList = JSON.parse(JSON.stringify(response.data));
        } else {
          this._toaster.pop('error', response.message)
        }
      } catch (error) {
        console.error(error)
      }
    })
  }

  closePopup() {
    this._taskService.taskPopupMode = '';
    this._taskService.taskPopupModeType = '';
    this._taskService.taskPopupUpdateData = null;
    this._taskService.showCreateEditTaskPopup = false;
    this.ontaskPopupClose.emit('')
  }
  createTask() {
    if(!this.taskForm.valid) {
      return;
    }
    let payload = {
      projectName: this.taskForm.get('projectName').value,
      workType: this.taskForm.get('workType').value,
      status: this.taskForm.get('status').value,
      summary: this.taskForm.get('summary').value,
      description: this.taskForm.get('description').value,
      createdBy: this.taskForm.get('createdBy').value,
      priority: this.taskForm.get('priority').value,
      startDate: this.taskForm.get('startDate').value,
      endDate: this.taskForm.get('endDate').value,
      dueDate: this.taskForm.get('dueDate').value,
      assignedTo: this.taskForm.get('assignedTo').value,
      reporter: this.taskForm.get('reporter').value,
      userId: this.userId,
      subTasks: this.taskForm.get('subTasks').value,
      workLogs: this.taskForm.get('workLogs').value
    }
    if (this._taskService.taskPopupModeType = 'Task') {
      if(this.mode == 'Create') {
        this.createNewTask(payload);
      } else if (this.mode == 'Edit') {
        this.updateTask(payload);
      }
    } else if (this._taskService.taskPopupModeType = 'Sub-Task') {
      delete payload.subTasks;
      if(this.mode == 'Create') {
        this.createNewSubTask(payload)
      }else if(this.mode == 'Edit') {
        this.updateSubTask(payload);
      }
    } 
  }

  updateSubTask(payload) {

  }

  createNewSubTask(payload) {
    if (!this.taskIdToCreateUpdateSubTask) {
      this._toaster.pop('error', 'Invalid parent task id');
      return;
    }
    this.isLoading = true;
    this._subtaskService.createSubTask(this.taskIdToCreateUpdateSubTask, payload).subscribe((res:any) => {
      if (res.success) {
        this._toaster.pop('success', res.message);
        this.closePopup();
      } else {
        this._toaster.pop('error', res.message);
      }
      this.isLoading = false;
    }, error => {
      this._toaster.pop('error', 'Something went wrong');
      this.isLoading = false; 
    })
  }

  createNewTask(payload) {
    this.isLoading = true;
    this._taskService.createNewTask(payload).subscribe((res: any) => {
      if (res.success) {
        this._toaster.pop('success', res.message);
        this.closePopup();
      } else {
        this._toaster.pop('error', res.message);
      }
      this.isLoading = false;
    }, error => {
      this._toaster.pop('error', 'Something went wrong');
      this.isLoading = false;
    })
  }

  updateTask(payload) {
    this.isLoading = true;
    this._taskService.updateTask(this.updateTaskData._id, payload).subscribe((res:any) => {
      if (res.success) {
        this._toaster.pop('success', res.message);
        this.closePopup();
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
