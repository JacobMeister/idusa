import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddNewUserPage } from '../add-new-user/add-new-user';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;
  users: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = [];
    this.items.push({title: "Coffee"});
    this.items.push({title: "Coffee + sugar"});
    this.items.push({title: "Coffee + milk"});
    this.items.push({title: "Coffee + sugar + milk"});
    this.items.push({title: "Water"});
    this.items.push({title: "Tea"});
  

    this.users =[];
    this.users.push({title: "John"});
    this.users.push({title: "William"});
    this.users.push({title: "Bob"});
    this.users.push({title: "Alice"});
    this.users.push({title: "Marjorie"});
  }

  itemTapped(event, item) {
   
  }

  addNewUser(){
    this.navCtrl.push(AddNewUserPage);
  }

}
