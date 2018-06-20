import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the AddNewUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-user',
  templateUrl: 'add-new-user.html',
})
export class AddNewUserPage {

  constructor(public camera: Camera, public navCtrl: NavController, public navParams: NavParams) {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.navCtrl.pop();
     }, (err) => {
      // Handle error
     });
     
  }


  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewUserPage');
  }

}
