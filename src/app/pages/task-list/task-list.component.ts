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

  selectedEmployeeList = new FormControl([this.userId]);
  selectedStatus = new FormControl(['Todo']);
  selectedWorkType = new FormControl([]);
  taskDisplayColumns = ['summary', 'status', 'assignedTo', 'reporter', 'dueDate', 'actions'];
  
  constructor(
    public _taskService: TaskService,
    public _commonService: CommonService,
    public _employeeService: EmployeeService,
    public _statusService: StatusService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    this.getAllEmployeeList(() => {
      this.getAllStatusList(() => {
        this.getAll_task_subtask_list();
      });
    });
  }
  getAllEmployeeList(callback) {
    this.isLoading = true;
    this._employeeService.fetchAllEmployees().subscribe((response: any) => {
      try {
        if(response.success) {
          this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
          this.employeeList = JSON.parse(JSON.stringify(response.data));
        }else {
          this._toaster.pop('error', response.message)
        }
        callback();
        this.isLoading = false;
        }catch(error) {
          this.isLoading = false;
          console.error(error)
        }
    })
  }



  getAllStatusList(callback) {
    this.isLoading = true;
    this._statusService.fetchStatusList().subscribe((response: any) => {
      try {
        if (response.success) {
          // this._statusService.statusList = JSON.parse(JSON.stringify(response.data));
          this.statusList = JSON.parse(JSON.stringify(response.data));

        } else {
          this._toaster.pop('error', response.message)
        }
        callback();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error)
      }
    })
  }

  editTask(taskdata) {
    console.log(taskdata);
    this._taskService.taskPopupUpdateData = taskdata;
    this._taskService.taskPopupModeType = taskdata.taskType;
    this._taskService.taskPopupMode = 'Edit';
    this._taskService.showCreateEditTaskPopup = true;
  }

  ontaskPopupClose() {
    this.getAllEmployeeList(() => {
      this.getAllStatusList(() => {
        this.getAll_task_subtask_list();
      });
    });
  }



  getAll_task_subtask_list() {
    let query:any = {}
    let emList = this.selectedEmployeeList.value.join(',');
    let statusList = this.selectedStatus.value.join(',');
    let worktypeList = this.selectedWorkType.value.join(',');
    if (emList) {
      query.assignedTo = emList;
    }
    if (statusList) {
      query.status = statusList;
    }
    if (worktypeList) {
      query.workType = worktypeList;
    }

    let queryString = `assignedTo=${emList}&status=${statusList}`

    this._taskService.getAllTask_SubTaskList(queryString).subscribe((res) => {

    })
  }





  // getUserTaskList() {
  //   this.isLoading = true;
  //   this._taskService.fetchUserTaskList(this.userId).subscribe((response: any) => {
  //     try {
  //       if (response.success) {
  //         this._taskService.taskList = JSON.parse(JSON.stringify(response.data));
  //       } else {
  //         this._toaster.pop('error', response.message);
  //       }
  //       this.isLoading = false;
  //     } catch (error) {
  //       this.isLoading = false;
  //       console.error(error)
  //     }
  //   })
  // }


}
