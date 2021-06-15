import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient){}
  async getAccount(id, password)
  {
    const account = await this.http.get(environment.apiUrl + `posts/${id}`).toPromise();
    localStorage.setItem('user', JSON.stringify(account));
    return account || {};
  }
}
