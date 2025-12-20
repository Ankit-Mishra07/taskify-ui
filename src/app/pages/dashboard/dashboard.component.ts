import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    public _commonService: CommonService,
    public _taskService: TaskService,

  ) { }

  ngOnInit() {
    console.log(this._commonService.isAdmin)
  }

}
