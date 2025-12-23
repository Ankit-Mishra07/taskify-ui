import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { StatusService } from 'src/app/services/status.service';
import { SubtaskService } from 'src/app/services/subtask.service';
import { TaskService } from 'src/app/services/task.service';
import { WorklogService } from 'src/app/services/worklog.service';

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
  selectedWorkType = new FormControl(['Task']);
  taskDisplayColumns = ['TaskId', 'summary', 'type', 'status', 'assignedTo', 'reporter', 'dueDate', 'actions'];

  searchLoadedText:string = '';
  backup_all_task_subtask_list = [];
  
  constructor(
    public _taskService: TaskService,
    public _commonService: CommonService,
    public _employeeService: EmployeeService,
    public _statusService: StatusService,
    public _worklogService: WorklogService,
    public _toaster: ToasterService,
    public _subTaskService: SubtaskService
  ) { }

  ngOnInit() {
    this.resetFilter();
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
    this._taskService.taskPopupUpdateData = taskdata;
    this._taskService.taskPopupModeType = 'Task';
    this._taskService.taskPopupMode = 'Edit';
    this._taskService.showCreateEditTaskPopup = true;
    this._subTaskService.taskIdToCreateUpdateSubTask = '';

  }

  ontaskPopupClose() {
    this.getAllEmployeeList(() => {
      this.getAllStatusList(() => {
        this.getAll_task_subtask_list();
      });
    });
  }



  getAll_task_subtask_list() {
    let emList = this.selectedEmployeeList.value;
    let statusList = this.selectedStatus.value;
    let worktypeList = this.selectedWorkType.value;

    let queryString = `assignedTo=${emList.join(',')}&status=${statusList.join(',')}&workType=${worktypeList.join(',')}`

    this.isLoading = true;
    this._taskService.getAllTask_SubTaskList(queryString).subscribe((response:any) => {
          try {
            if (response.success) {
              this._taskService.all_task_subtask_list = JSON.parse(JSON.stringify(response.data));
              this.backup_all_task_subtask_list = JSON.parse(JSON.stringify(response.data));
            } else {
              this._toaster.pop('error', response.message);
            }
            this.isLoading = false;
          } catch (error) {
            this.isLoading = false;
            console.error(error)
          }
    }, error => {
            this.isLoading = false;
            console.error(error)
    })
  }

  searchLoadedTask() {
    this._taskService.all_task_subtask_list = this.backup_all_task_subtask_list.filter(v => (v.summary.toLowerCase().includes(this.searchLoadedText.toLowerCase()) || v.taskUniqueId.toLowerCase().includes(this.searchLoadedText.toLowerCase())) );
    if (!this.searchLoadedText) {
      this.clearLoadedSearch();
    }
  }

  clearLoadedSearch() {
    this.searchLoadedText = '';
    this._taskService.all_task_subtask_list = JSON.parse(JSON.stringify(this.backup_all_task_subtask_list))

  }

  searchSelectedFilter() {
    this.searchLoadedText = '';
    this.getAll_task_subtask_list();
  }

  resetFilter() {
    this.searchLoadedText = '';
    this.selectedEmployeeList.setValue([this.userId]);
    this.selectedStatus.setValue(['Todo']);
    this.selectedWorkType.setValue(['Task']);
    this.getAllEmployeeList(() => {
      this.getAllStatusList(() => {
        this.getAll_task_subtask_list();
      });
    }); 
  }
  refersh() {
    this.getAllEmployeeList(() => {
      this.getAllStatusList(() => {
        this.getAll_task_subtask_list();
      });
    });
  }

  enterWorkLog(element) {
    this._worklogService.selectedTaskData = element;
    this._worklogService.worklogPopupMode = 'Create';
    this._worklogService.workLogEditData = null;
    this._worklogService.openWorklogPopup = true;
  }

  closeWorklogPopup() {
    this.refersh();
  }

  selectAll(listParam) {
    if (listParam === 'employeeList') {
      if (this.selectedEmployeeList.value.includes('All')) {
        this.selectedEmployeeList.setValue(['All'].concat(this.employeeList.map(v => v._id.toString())));
      }else {
        this.selectedEmployeeList.setValue([]);
      }
    }
    if (listParam === 'statusList') {
      if (this.selectedStatus.value.includes('All')) {
        this.selectedStatus.setValue(['All'].concat(this.statusList.map(v => v.status.toString())));
      }else {
        this.selectedStatus.setValue([]);
      }
    }
    if (listParam === 'workTypes') {
      if (this.selectedWorkType.value.includes('All')) {
        this.selectedWorkType.setValue(['All'].concat(this._commonService.workTypes.map(v => v.toString())));
      }else {
        this.selectedWorkType.setValue([]);
      }
    }
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
