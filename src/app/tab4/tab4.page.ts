import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public title: string;
  public text: string;
  public card_subtitle: string; 
  public card_content: any; 
  private faio: FingerprintAIO

  constructor() {
    this.title = "Fingerprint"; 
    this.text = "Fingerprint scanners are security systems of biometrics. They are now used in police stations, security industries and most recently, on smartphones. Everyone has patterns of friction ridges on their fingers, and it is this pattern that is called the fingerprint. Fingerprints are uniquely detailed, durable over an individual's lifetime, and difficult to alter. Because there are countless combinations, fingerprints have become an ideal means of identification."; 
    this.card_subtitle = "Fingerprint Info";
    this.card_content = "No data to show";
    this.faio = new FingerprintAIO(); 
  }

  readFingerPrintInfo() {
    this.card_content = ''; 
    this.faio.show({
      title: 'Biometric Authentication',
      subtitle: 'Coolest Plugin ever', 
      description: 'Please authenticate', 
      fallbackButtonTitle: 'Use Backup', 
      disableBackup:false
    }).then((result: any) => this.card_content = JSON.stringify(result)).catch((error: any) => console.log(error));
  }
}
