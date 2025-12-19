import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl = 'http://localhost:3000/api'
  token = this._commonService.getCookie('user_access')
  constructor(
    public _http: HttpClient,
    public _commonService: CommonService
  ) { }

  commonPostMethod(endpoint, data) {
    try {
      endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
      let url = this.baseUrl + endpoint;
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.token
      })
      return this._http.post(url, data, {
        headers: header
      })
    }catch(error) {
      console.error(error)
    }
  }

  commonGetMethod(endpoint) {
    try {
      endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
      let url = this.baseUrl + endpoint;
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.token
      })
      return this._http.get(url, {
        headers: header
      })
    } catch (error) {
      console.error(error)
    }
  }
}
