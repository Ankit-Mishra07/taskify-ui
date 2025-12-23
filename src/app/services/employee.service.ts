import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [];
  displayedEmployeeColumns = ['employee_id', 'role', 'userName', 'email', 'createdAt', 'actions'];

  employeeCreateEditMode = '';
  employeeCreateEditData:any = null;
  showEmployeeCreateEditPopup = false;

  constructor(
    public _webService: WebService
  ) { }

  fetchAllEmployees() {
    return this._webService.commonGetMethod('/user/getallusers');
  }
  createEmployee(data) {
    return this._webService.commonPostMethod('/user/create', data);
  }
  updateEmployee(userid, data) {
    return this._webService.commonPatchMethod(`/user/update/${userid}`, data);
  }

  onCloseEmployeeCreateEditPopup() {
    this.employeeCreateEditMode = '';
    this.employeeCreateEditData = null;
    this.showEmployeeCreateEditPopup = false;
  }

}
