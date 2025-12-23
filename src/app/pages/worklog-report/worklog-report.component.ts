import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { WorklogService } from 'src/app/services/worklog.service';

@Component({
  selector: 'app-worklog-report',
  templateUrl: './worklog-report.component.html',
  styleUrls: ['./worklog-report.component.scss']
})
export class WorklogReportComponent implements OnInit {

  logForm!:FormGroup;
  currentUserId = this._commonService.getUserId();
  logDateWiseData = [];
  constructor(
    public _employeeService: EmployeeService,
    public _commonService: CommonService,
    public _workLogService: WorklogService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getEmployeesList();
  }

  initForm() {
    this.logForm = new FormGroup({
      fromDate: new FormControl(new Date(), [Validators.required]),
      toDate: new FormControl(new Date(), [Validators.required]),
      userId: new FormControl(this.currentUserId, [Validators.required]),
    })
  }

    getEmployeesList() {
      this._employeeService.fetchAllEmployees().subscribe((response:any) => {
        try {
          if(response.success) {
            this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
          }else {
            this._toaster.pop('error', response.message)
          }
        }catch(error) {
          console.error(error)
        }
      })
    }

    getLogs() {
      let queryString = `userId=${this.logForm.get('userId').value}&fromDate=${this.logForm.get('fromDate').value.toDateString()}&toDate=${this.logForm.get('toDate').value.toDateString()}`
      this._workLogService.getworkLogs(queryString).subscribe((res:any) => {
        if(res.success){
          this.logDateWiseData = res.data;
        }else {
          this._toaster.pop('error', res.message);
          this.logDateWiseData = [];
        }
      },error => {
        this._toaster.pop('error', 'Something went wrong');
      })
    }

}
