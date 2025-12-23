import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  statusList = [];
  workTypes = ['Task', 'Sub-Task', 'Bug'];
  projectList = ['Front Office Management'];
  priorityList = ['Showstopper', 'Critical', 'High', 'Medium', 'Low'];

  // [
  //   {
  //     "Code": "FOM",
  //     "Name": "Front Office(FOM)",
  //     "ProductCode": "10021"
  //   },
  //   {
  //     "Code": "POS",
  //     "Name": "Point of Sale(POS)",
  //     "ProductCode": "10004"
  //   },
  //   {
  //     "Code": "SPA",
  //     "Name": "SPA",
  //     "ProductCode": "10029"
  //   },
  //   {
  //     "Code": "Banquets",
  //     "Name": "Banquets(SNC)",
  //     "ProductCode": "10035"
  //   },
  //   {
  //     "Code": "FAS",
  //     "Name": "Fx Finance(FAS)",
  //     "ProductCode": "10010"
  //   }
  // ]
  constructor(
  ) { }
  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    return parts.pop().split(";").shift();
  }
  setCookie(key: string, value: string) {
    document.cookie = key + '=' + value + '; path=/;';
  }
  setItemToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItemFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  isLoggedIn() {
    if (this.getCookie('user_access')) {
      return true;
    }
    return false;
  }
  getUserDetails() {
    return this.getItemFromLocal('user_data');
  }
  getUserId() {
    return this.getItemFromLocal('user_data')._id;
  }
  getFirstLetter() {
    let user_data: any = this.getItemFromLocal('user_data');
    if (user_data) {
      return user_data.userName[0].toString().toUpperCase();
    }
  }
  getUserName() {
    return this.getItemFromLocal('user_data').userName;
  }
  getUserEmail() {
    return this.getItemFromLocal('user_data').email;
  }
  get isAdmin():any {
    let user_data:any = this.getItemFromLocal('user_data');
    return user_data.isAdmin;
  }
  get isSuperAdmin():any {
    let user_data:any = this.getItemFromLocal('user_data');
    return user_data.isSuperAdmin;
  }

  getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  isValidDate(date) {
    if (!date || new Date(date).toString() == "Invalid Date") {
      return false;
    }
    return true;
  }
}
