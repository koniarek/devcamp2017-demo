import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  public results:any;
  public coords: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private geolocation: Geolocation) {
  }

   
  public getPosition(){

  this.geolocation.getCurrentPosition().then((resp) => {
    this.coords = resp.coords;   
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

  public getWeather(){
    
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&APPID=97693003dd0c888aeda4328c47ce15b3`).subscribe(data => {
      this.results = data['results'];
    });
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  // 

}
