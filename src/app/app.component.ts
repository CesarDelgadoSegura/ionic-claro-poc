import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Avisos', url: '/', icon: 'notifications' },
    { title: 'Guardias', url: '/', icon: 'calendar' },
    { title: 'Alarmas', url: '/', icon: 'alarm' },
    { title: 'SES', url: '/', icon: 'calendar' },
  ];
  public settingPages = [
    { title: 'Configuración', url: '/', icon: 'settings' },
    { title: 'Cerrar Sesión', url: '/close/account', icon: 'exit' },
  ];
  constructor() {}
}
