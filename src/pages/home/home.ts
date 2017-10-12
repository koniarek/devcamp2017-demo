import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertController: AlertController) {

  }

  public hello(){
    let alert = this.alertController.create({
      title: 'Devcamp 2017',
      subTitle: 'Hello Developers, Have a nice day!',
      buttons: ['OK']
    });
    alert.present();
  }
   
}
