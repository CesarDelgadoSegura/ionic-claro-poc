import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password = {
    current: 'password'
  };
  constructor(public menuCtrl: MenuController){}
  ngOnInit(){}
  ionViewWillEnter(){
    this.menuCtrl.enable(false).finally();
  }
  change(item)
  {
    this.password[item] = (this.password[item] === 'password') ? 'text': 'password';
  }
}
