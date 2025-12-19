import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { StatusService } from 'src/app/services/status.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  userId = this._commonService.getUserId();
  employeeList = [];
  statusList = [];
  isLoading = false;

  selectedEmployeeList = new FormControl();
  selectedStatus = new FormControl();
  
  constructor(
    public _taskService: TaskService,
    public _commonService: CommonService,
    public _employeeService: EmployeeService,
    public _statusService: StatusService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    this.getAllEmployeeList();
  }

  getUserTaskList() {
    this.isLoading = true;
    this._taskService.fetchUserTaskList(this.userId).subscribe((response:any) => {
      try {
        if(response.success) {
          this._taskService.taskList = JSON.parse(JSON.stringify(response.data));
          this._taskService.all_task_subtask_list = this._taskService.combineSubtaskToTask(response.data)
        }else {
          this._toaster.pop('error', response.message);
        }
        this.isLoading = false;
      }catch(error) {
        this.isLoading = false;
        console.error(error)
      }
    })
  }

  getAllEmployeeList() {
    this.isLoading = false;
    this._employeeService.fetchAllEmployees().subscribe((response: any) => {
      try {
        if(response.success) {
          this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
          this.employeeList = JSON.parse(JSON.stringify(response.data));
          this.getAllStatusList();

        }else {
          this._toaster.pop('error', response.message)
        }
        this.isLoading = false;
        }catch(error) {
          this.isLoading = false;
          console.error(error)
        }
    })
  }

  getAllStatusList() {
    this.isLoading = false;
    this._statusService.fetchStatusList().subscribe((response: any) => {
      try {
        if (response.success) {
          // this._statusService.statusList = JSON.parse(JSON.stringify(response.data));
          this.statusList = JSON.parse(JSON.stringify(response.data));
          this.getUserTaskList();

        } else {
          this._toaster.pop('error', response.message)
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error)
      }
    })
  }



}
