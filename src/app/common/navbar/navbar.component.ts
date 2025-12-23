import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { SubtaskService } from 'src/app/services/subtask.service';
import { TaskService } from 'src/app/services/task.service';
import { Subject } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  @ViewChild('profileIcon') profileIcon: ElementRef;

  firstLetter = '';
  userDetail = this._commonService.getUserDetails();
  searchTaskText = '';
  searchSubject = new Subject<string>()
  constructor(
    public _commonService: CommonService,
    public _taskService: TaskService,
    public _router: Router,
    public _subtaskService: SubtaskService,
  ) { }

  ngOnInit() {
    this.firstLetter = this._commonService.getFirstLetter();
    this.profileIcon.nativeElement.style.color = this._commonService.getRandomRgbColor();

    this.searchSubject.pipe(
      map(value => value.trim()),
      filter(value => value.length >= 3),
      debounceTime(500)
    ).subscribe(value => {
      this.searchTask(value)
    })
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
    this._taskService.taskPopupModeType = 'Task';
    this._taskService.taskPopupUpdateData = null;
    this._taskService.taskPopupMode = 'Create'
    this._taskService.showCreateEditTaskPopup = true;
    this._subtaskService.taskIdToCreateUpdateSubTask = '';
  }

  onSearch() {
    if (this.searchTaskText.length >= 3) {
      this.searchSubject.next(this.searchTaskText)
    }
    if(!this.searchTaskText) {
      this.clearSearch();
    }
  }
  searchTask(value) {
    this._taskService.searchTaskByText(value).subscribe((res:any) => {
      if(res.success) {
        this._taskService.searchTaskResult = res.data;
      }else {
        this._taskService.searchTaskResult = [];
      }
    })
  }
  open_in_new(elem) {
    this.clearSearch();
    window.open(`/task/${elem._id}?type=${elem.workType}`)
  }
  clearSearch() {
    this._taskService.searchTaskResult = [];
    this.searchTaskText = '';
  }
  ngOnDestroy(): void {
      this.searchSubject.unsubscribe();
  }
}
