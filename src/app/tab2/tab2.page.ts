import { Component } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public title: string;
  public text: string;
  public card_subtitle: string; 
  public card_content: any; 
  public orientation: any;
  public first_load: boolean;
  public options: GyroscopeOptions
  private gyroscope: Gyroscope

  constructor() {
    this.title = "Gyroscope"; 
    this.text = "The gyroscope measures the angular velocity of the device; that is, the rate of rotation (in radians/second) around each of the same three axes as defined for the accelerometer sensor. Although it is similar to the accelerometer in that both can be used to determine the position of orientation of the device, the gyroscope can sense rotation, whereas the accelerometer cannot. Because of this, the gyroscope is very useful when we need to measure rotational movement, such as spinning, turning, and so on."; 
    this.card_subtitle = "Gyroscope Info";
    this.card_content = "No data to show";
    this.first_load = true; 
    this.options = {frequency: 1000}
    this.gyroscope = new Gyroscope()
  }

  readGyroscopeInfo() {
    if(this.first_load) {
      this.card_content = ''; 
      this.first_load = false;
    }
    this.gyroscope.getCurrent(this.options).then(orientation => {
      this.orientation = orientation; 
      this.card_content += "X: " + this.orientation.x + "\n";
      this.card_content += "Y: " + this.orientation.y + "\n";
      this.card_content += "Z: " + this.orientation.z + "\n";
    }).catch(error => {
      console.log(error); 
    })
  }

}
