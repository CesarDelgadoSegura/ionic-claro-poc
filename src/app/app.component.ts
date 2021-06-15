import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public user = {
    initials: 'JL',
    title: 'Jose Lopez',
  } as any;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Avisos', url: '/news', icon: 'notifications' },
    { title: 'Guardias', url: '/calendar', icon: 'calendar' },
    { title: 'Alarmas', url: '/alarms', icon: 'alarm' },
    { title: 'SES', url: '/ses', icon: 'calendar' },
  ];
  constructor(public navCtrl: NavController) {
    const lStorage = localStorage.getItem('user');
    if(lStorage !== null)
    {
      this.user = JSON.parse(lStorage);
      const fullnameDivide = this.user.title.split(' ');
      this.user.initials = this.user.title[0] + fullnameDivide[1][0];
    }
  }
  closeSession(){
    localStorage.removeItem('user');
    this.navCtrl.navigateForward('/auth/login').finally();
  }
}
