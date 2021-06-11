import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Avisos', url: '/folder/Outbox', icon: 'notifications' },
    { title: 'Guardias', url: '/folder/Favorites', icon: 'calendar' },
    { title: 'Alarmas', url: '/folder/Archived', icon: 'alarm' },
    { title: 'SES', url: '/folder/Trash', icon: 'calendar' },
  ];
  public settingPages = [
    { title: 'Configuración', url: '/folder/Inbox', icon: 'settings' },
    { title: 'Cerrar Sesión', url: '/folder/Outbox', icon: 'exit' },
  ];
  constructor() {}
}
