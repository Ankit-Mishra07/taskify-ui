import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  isLoading = false;
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  searchEmText = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public _employeeService: EmployeeService,
    public _toaster: ToasterService,
    public _commonService: CommonService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.isLoading = true;
    this._employeeService.fetchAllEmployees().subscribe((response:any) => {
      try {
        if(response.success) {
          this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
          this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(response.data)));
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

  onEmClosePopup() {
    this._employeeService.onCloseEmployeeCreateEditPopup();
    this.getEmployeesList();
  }

  editEmployee(elem) {
    this._employeeService.employeeCreateEditMode = 'Edit';
    this._employeeService.employeeCreateEditData = elem;
    this._employeeService.showEmployeeCreateEditPopup = true;
  }

  addNewEmployee() {
    this._employeeService.employeeCreateEditMode = 'Create';
    this._employeeService.employeeCreateEditData = null;
    this._employeeService.showEmployeeCreateEditPopup = true;
  }

  searchEmlist() {
    let list = this._employeeService.employeeList.filter(v => (v.userName.toLowerCase().includes(this.searchEmText) || v.email.toLowerCase().includes(this.searchEmText)))
    this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(list)));
    if(!this.searchEmText) {
      this.clearEmSearch();
    }
  }
  clearEmSearch() {
    this.searchEmText = '';
    this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(this._employeeService.employeeList)));
  }

}
