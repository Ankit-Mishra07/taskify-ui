import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('profileIcon') profileIcon: ElementRef;

  firstLetter = '';
  userDetail = this._commonService.getUserDetails();
  constructor(
    public _commonService: CommonService,
    public _taskService: TaskService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.firstLetter = this._commonService.getFirstLetter();
    this.profileIcon.nativeElement.style.color = this._commonService.getRandomRgbColor();
  }

 logout() {
  localStorage.clear();
  sessionStorage.clear();

  document.cookie.split(";").forEach(cookie => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
  });

  this._router.navigateByUrl('/login');
  window.location.reload();
}

  createNewTask() {
    this._taskService.taskPopupMode = 'Create'
    this._taskService.showCreateEditTaskPopup = true;
  }
  
}
