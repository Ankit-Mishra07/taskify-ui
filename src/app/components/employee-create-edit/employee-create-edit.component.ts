import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-create-edit',
  templateUrl: './employee-create-edit.component.html',
  styleUrls: ['./employee-create-edit.component.scss']
})
export class EmployeeCreateEditComponent implements OnInit {

  @Input('mode') mode:string;
  @Input('editData') editData:any;
  @Output() closePopup = new EventEmitter();
  emForm!:FormGroup;
  isLoading = false;
  constructor(
    public _employeeService: EmployeeService,
    public _toaster: ToasterService,
  ) { }

  ngOnInit() {
    this.mode = this.mode === 'Edit' ? 'Edit' : 'Create';
    if(this.mode == 'Create') {
      this.initForm();
    }else if(this.mode == 'Edit') {
      this.updateForm()
    }
  }

  initForm() {
    this.emForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
      role: new FormControl('', Validators.required),
      employee_id: new FormControl(0, Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      isAdmin: new FormControl(false),
      isSuperAdmin: new FormControl(false),
    })
  }

  updateForm() {
    this.emForm = new FormGroup({
      userName: new FormControl(this.editData.userName, Validators.required),
      email: new FormControl(this.editData.email, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
      role: new FormControl(this.editData.role, Validators.required),
      employee_id: new FormControl(this.editData.employee_id, Validators.required),
      password: new FormControl(this.editData.password, [Validators.required, Validators.minLength(6)]),

      isAdmin: new FormControl(this.editData.isAdmin),
      isSuperAdmin: new FormControl(this.editData.isSuperAdmin),
    })
  }

  closeEmPopup() {
    this.closePopup.emit('')
  }

  onSaveEmployee() {
    this.isLoading = true;
    let payload = {
      userName: this.emForm.get('userName').value,
      email: this.emForm.get('email').value,
      role: this.emForm.get('role').value,
      employee_id: this.emForm.get('employee_id').value,
      isAdmin: this.emForm.get('isAdmin').value,
      isSuperAdmin: this.emForm.get('isSuperAdmin').value,
      password: this.emForm.get('password').value,
    }

    if(this.mode == 'Create') {
      this._employeeService.createEmployee(payload).subscribe((res:any) => {
        if(res.success) {
          this._toaster.pop('success', res.message);
          this.closeEmPopup();
        }else {
          this._toaster.pop('error', res.message);
        }
        this.isLoading = false;
      }, error => {
        this._toaster.pop('error', 'Something went wrong');
        this.isLoading = false;
      })
    }else if(this.mode === 'Edit') {
      this._employeeService.updateEmployee(this.editData._id ,payload).subscribe((res: any) => {
        if (res.success) {
          this._toaster.pop('success', res.message);
          this.closeEmPopup();
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
