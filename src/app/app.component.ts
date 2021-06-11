import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
  constructor() {}
}
