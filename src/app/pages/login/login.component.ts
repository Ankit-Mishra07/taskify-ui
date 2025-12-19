import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { CommonService } from 'src/app/services/common.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])

  constructor(
    public _webService: WebService,
    private toasterService: ToasterService,
    public _commonService: CommonService,
    public _router: Router
  ) {
    if(this._commonService.isLoggedIn()) {
      this._router.navigateByUrl('/')
    }
   }


  ngOnInit() {
  }

  onLogin() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid || !this.emailFormControl.value || !this.passwordFormControl.value) {
      this.toasterService.pop('error','Invalid email or password');
      return;
    }

    let payload = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    this._webService.commonPostMethod('/user/login', payload).subscribe((response:any) => {
      if(response.success) {
        this.toasterService.pop('success', response.message);
        this._commonService.setCookie('user_access', response.data.token);
        this._commonService.setItemToLocal('user_data', response.data.user);
        this._router.navigateByUrl('/')
      }else {
        this.toasterService.pop('error', response.message);
      }
    })
  }

}
