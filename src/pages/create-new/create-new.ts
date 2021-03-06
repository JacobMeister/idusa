import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new',
  templateUrl: 'create-new.html',
})
export class CreateNewPage {
title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewPage');
  }
  submit(){
    this.navCtrl.pop();
  }

}
