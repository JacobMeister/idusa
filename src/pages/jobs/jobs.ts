import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
  items: Array<{title: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({title: "Coffee"});
    this.items.push({title: "Coffee + sugar"});
    this.items.push({title: "Coffee + sugar"});
    this.items.push({title: "Coca Cola"});
    this.items.push({title: "Coca Cola"});
    this.items.push({title: "Oolong Tea"});
    this.items.push({title: "Earl Grey Tea"});
    this.items.push({title: "Green Tea"});
    this.items.push({title: "Coca Cola"});
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
  }

}
