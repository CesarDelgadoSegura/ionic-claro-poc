import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService{
  constructor(private http: HttpClient){}
  getUserByIdPassword(userId)
  {
    const result  = this.http.get(environment.apiUrl + `posts/${userId}`).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data));
    });

    return result || {};
  }
}
