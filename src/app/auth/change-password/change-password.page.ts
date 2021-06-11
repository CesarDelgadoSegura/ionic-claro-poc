import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit{
  password = {
    current: 'password',
    new: 'password',
    repeat: 'password'
  };
  constructor(){ }
  ngOnInit(){}
  change(item)
  {
    this.password[item] = (this.password[item] === 'password') ? 'text': 'password';
  }
}
