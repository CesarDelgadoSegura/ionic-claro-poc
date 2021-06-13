import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
  constructor(public menuCtrl: MenuController){ }
  ngOnInit(){}
  ionViewWillEnter(){
    this.menuCtrl.enable(false).finally();
  }
  change(item)
  {
    this.password[item] = (this.password[item] === 'password') ? 'text': 'password';
  }
}
