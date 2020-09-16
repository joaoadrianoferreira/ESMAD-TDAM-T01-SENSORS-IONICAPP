import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  public title: string;
  public text: string;
  public card_subtitle: string; 
  public card_subtitle1: string; 
  public card_content: any; 
  public location: any;
  private geolocation: Geolocation;
  private sqlite: SQLite;
  public records: string; 

  constructor(public toastController: ToastController) {
    this.title = "Location"; 
    this.text = "This is not an actual sensor, but rather a combination of data collected from different sources (Global Positioning System, or GPS, cell-ID, and Wi-Fi) that allows us to determine the device’s geographical location (in latitude/longitude) at different levels of resolution (coarse or fine). GPS data is obtained from a network of satellites orbiting Earth and has an accuracy of around 4.9 meters (16 feet) under open sky. Location information derived from cellular tower or Wi-Fi access point IDs has much lower accuracy (between 5,300 feet and 1 mile), but uses very little energy as it works passively, in contrast to the active location- fixing done by GPS."; 
    this.card_subtitle = "Location Info";
    this.card_subtitle1 = "Location Records";
    this.card_content = "No data to show";
    this.geolocation = new Geolocation(); 
    this.records = "No records loaded"; 
    this.sqlite = new SQLite(); 
    this.createTable(); 
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000
    });
    toast.present();
  }

  readLocationInfo() {
    this.card_content = ''; 
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location; 
      this.card_content += "Latitude: " + this.location.coords.latitude + "\n";
      this.card_content += "Longitude: " + this.location.coords.longitude + "\n";
    }).catch((error) => {console.log(error)});
  }

  saveLocation() {
    this.geolocation.getCurrentPosition().then((location) => {
      this.location = location; 
      this.card_content += "Latitude: " + this.location.coords.latitude + "\n";
      this.card_content += "Longitude: " + this.location.coords.longitude + "\n";
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO locations (latitude, longitude) VALUES ("'+ this.location.coords.latitude  +'", "'+ this.location.coords.longitude  +'")', [])
          .then(() => this.presentToast('Record Created')).catch(e => this.presentToast(JSON.stringify(e)));
      })
      .catch(e => this.presentToast(JSON.stringify(e)));
    }).catch((error) => {console.log(error)});
  }

  getRecords() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM locations', [])
        .then((result) => {
          this.records = ''; 
          for (let i = 0; i < result.rows.length; i++) {
            let item = result.rows.item(i);
            this.records += "Latitude: " + item.latitude + "\n";
            this.records += "Longitude: " + item.longitude + "\n";
          }
        }).catch(e => this.presentToast(JSON.stringify(e)));
    })
    .catch(e => this.presentToast(JSON.stringify(e)));
  }

  createTable() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS locations (latitude REAL NOT NULL, longitude REAL NOT NULL)', [])
        .then().catch(e => this.presentToast(JSON.stringify(e)));
    })
    .catch(e => this.presentToast(JSON.stringify(e)));
  }
}
