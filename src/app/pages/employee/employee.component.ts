import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  isLoading = false;
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public _employeeService: EmployeeService,
    public _toaster: ToasterService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.isLoading = true;
    this._employeeService.fetchAllEmployees().subscribe((response:any) => {
      try {
        response = {
          "success": true,
          "message": "Users fetched successfully",
          "data": [
            {
              "_id": "6941916022ed5bd6362fdac7",
              "userName": "Ankit Mishra",
              "email": "a@a.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-16T17:05:36.934Z",
              "updatedAt": "2025-12-19T09:24:56.573Z",
              "employee_id": 14545
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
            {
              "_id": "6944bdf6fb70d2b75bee5742",
              "userName": "Ankit Mishra",
              "email": "ankit.mishra@idsnext.com",
              "isAdmin": true,
              "isSuperAdmin": true,
              "createdAt": "2025-12-19T02:52:38.557Z",
              "updatedAt": "2025-12-19T08:40:03.230Z",
              "employee_id": 1691
            },
          ]
        }
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

}
