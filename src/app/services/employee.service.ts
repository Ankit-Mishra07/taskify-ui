import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [];
  displayedEmployeeColumns = ['employee_id', 'userName', 'email', 'createdAt', 'actions']

  constructor(
    public _webService: WebService
  ) { }

  fetchAllEmployees() {
    return this._webService.commonGetMethod('/user/getallusers');
  }

}
