import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService{
  httpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
  });

  constructor(private http: HttpClient){}

  getUserById(userId)
  {
    const result  = this.http.get(environment.apiUrl + `posts/${userId}`).subscribe(data => {
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
    const options = {
      headers: this.httpHeaders
    };
    this.http.put(environment.apiUrl + `posts${userId}`, user.toString(), options);
  }
}
