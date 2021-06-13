import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public user = {} as any;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Avisos', url: '/news', icon: 'notifications' },
    { title: 'Guardias', url: '/calendar', icon: 'calendar' },
    { title: 'Alarmas', url: '/alarms', icon: 'alarm' },
    { title: 'SES', url: '/ses', icon: 'calendar' },
  ];
  public settingPages = [
    { title: 'Configuración', url: '/setting', icon: 'settings' },
    { title: 'Cerrar Sesión', url: '/close/account', icon: 'exit' },
  ];
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const fullnameDivide = this.user.title.split(' ');
    this.user.initials = this.user.title[0] + fullnameDivide[1][0];
    console.log(this.user.initials);
  }
}
