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
  get isAdmin():any {
    let user_data:any = this.getItemFromLocal('user_data');
    return user_data.isAdmin;
  }
  get isSuperAdmin():any {
    let user_data:any = this.getItemFromLocal('user_data');
    return user_data.isSuperAdmin;
  }
}
