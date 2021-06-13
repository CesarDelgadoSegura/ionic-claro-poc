import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, NavController } from '@ionic/angular';
import { ChangePasswordService } from './change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit{
  type = {
    current: 'password',
    new: 'password',
    repeat: 'password'
  };

  password = {
    current: '',
    new: '',
    repeat: ''
  };

  constructor(
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private changeSrv: ChangePasswordService){ }

  ngOnInit(){}

  ionViewWillEnter(){
    this.menuCtrl.enable(false).finally();
  }

  change(item)
  {
    this.type[item] = (this.type[item] === 'password') ? 'text': 'password';
  }

  async submit()
  {
    /** Consultamos y almacenamos la información */
    this.changeSrv.getUserByIdPassword(9391);

    /** Obtenemos la contraseña. */
    const user = JSON.parse(localStorage.getItem('user'));

    if(!this.password.current || !this.password.new || !this.password.repeat)
    {
      this.message('Los campos no pueden estar vacíos');
    }

    else if(this.password.new !== this.password.repeat)
    {
      this.message('Las contraseñas deben ser iguales');
    }

    else if(this.password.current !== user.author)
    {
      this.message('La contraseña ingresada no es la correcta');
    }

    else
    {
      const alert = await this.alertCtrl.create({
        header: 'Notificación',
        message: 'La contraseña fue actualizada exitosamente',
        buttons: [{
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.navigateRoot('/home');
          }
        }]
      }).finally();
      await alert.present();
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
