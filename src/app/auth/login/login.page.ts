import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, NavController} from '@ionic/angular';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account = {
    id: '',
    password: ''
  };

  password = {
    current: 'password'
  };

  constructor(public menuCtrl: MenuController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public srvLogin: LoginService){}

  ngOnInit(){}

  ionViewWillEnter(){
    this.menuCtrl.enable(false).finally();
  }

  change(item)
  {
    this.password[item] = (this.password[item] === 'password') ? 'text': 'password';
  }

  async joinAccount()
  {
    const account = await this.srvLogin.getAccount(this.account.id, this.account.password);

    const lStorage = await localStorage.getItem('user');

    if(lStorage === null)
    {
      this.message('Los datos ingresados no son correctos');
    }
    else
    {
      await this.navCtrl.navigateRoot('/home');
    }
  }

  async message(msg)
  {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['Aceptar']
    }).finally();
    await alert.present();
  }
}
