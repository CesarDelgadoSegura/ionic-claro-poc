import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService{
  httpHeaders = new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
  });

  public options = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient){}

  getUserById(userId)
  {
    const result  = this.http.get(environment.apiUrl + `posts/${userId}`, this.options).subscribe(data => {

      localStorage.setItem('user', JSON.stringify(data));
    });

    return result || {};
  }

  changePassword(userId, newPassword)
  {
    /** */
    const user = JSON.parse(localStorage.getItem('user'));
    user.author = newPassword;

    /** */
    this.http.put(environment.apiUrl + `posts${userId}`, user.toString(), this.options);
  }
}
