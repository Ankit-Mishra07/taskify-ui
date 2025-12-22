import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent implements OnInit {
  @Input('userName') userName:string;
  @Input('width') width:string;
  @Input('height') height:string;
  @ViewChild('profileIcon') profileIcon: ElementRef;
  firstLetter = '';

  constructor(
  ) { }

  ngOnInit() {
    this.firstLetter = this.userName[0].toString().toUpperCase();
    this.profileIcon.nativeElement.style.color = this.getRandomRgbColor();
    this.profileIcon.nativeElement.style.width = this.width;
    this.profileIcon.nativeElement.style.height = this.height;
  }
  getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

}
