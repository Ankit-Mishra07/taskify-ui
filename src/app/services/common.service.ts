import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
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
}
