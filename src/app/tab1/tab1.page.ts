import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public title: string;
  public text: string;
  public card_subtitle: string; 
  public card_content: any; 
  public acceleration: any;
  public first_load: boolean;
  private deviceMotion: DeviceMotion

  constructor() {
    this.title = "Acelerometer"; 
    this.text = "An accelerometer sensor is able to measure acceleration along three coordinate axes. Acceleration is measured in meters/second, and Android includes in this measurement acceleration resulting from the force of gravity. Acceleration data has many uses; for example, it can be the basis for determining orientation in space, and it can also aid in detecting sudden motions, such as shocks or vibrations."
    this.card_subtitle = "Acelerometer Info";
    this.card_content = "No data to show";
    this.first_load = true; 
    this.deviceMotion = new DeviceMotion(); 
  }
  readAcelerometerInfo() {
    if(this.first_load) {
      this.card_content = ''; 
      this.first_load = false;
    }
    this.deviceMotion.getCurrentAcceleration().then(acceleration => {
      this.acceleration = acceleration;
      this.card_content += "X: " + this.acceleration.x + "\n";
      this.card_content += "Y: " + this.acceleration.y + "\n";
      this.card_content += "Z: " + this.acceleration.z + "\n";
    }).catch(error => {
      console.log(error); 
    })
  }
}
 