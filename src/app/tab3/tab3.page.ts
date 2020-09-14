import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public title: string;
  public text: string;
  public card_subtitle: string; 
  public card_content: any; 
  public location: any;
  private geolocation: Geolocation

  constructor() {
    this.title = "Location"; 
    this.text = "This is not an actual sensor, but rather a combination of data collected from different sources (Global Positioning System, or GPS, cell-ID, and Wi-Fi) that allows us to determine the device’s geographical location (in latitude/longitude) at different levels of resolution (coarse or fine). GPS data is obtained from a network of satellites orbiting Earth and has an accuracy of around 4.9 meters (16 feet) under open sky. Location information derived from cellular tower or Wi-Fi access point IDs has much lower accuracy (between 5,300 feet and 1 mile), but uses very little energy as it works passively, in contrast to the active location- fixing done by GPS."; 
    this.card_subtitle = "Location Info";
    this.card_content = "No data to show";
    this.geolocation = new Geolocation(); 
  }

  readLocationInfo() {
    this.card_content = ''; 
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location; 
      this.card_content += "Latitude: " + this.location.coords.latitude + "\n";
      this.card_content += "Longitude: " + this.location.coords.longitude + "\n";
    }).catch((error) => {console.log(error)});
  }
}
