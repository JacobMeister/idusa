import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { CreateNewPage } from '../create-new/create-new';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items =[];
    this.items.push({title: "Avans"});
    this.items.push({title: "SAP"});
    this.items.push({title: "Pink Elephant"});
    this.items.push({title: "NS"});
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(GroupPage, {
      item: item
    });
  }

  addNewGroup(){
    this.navCtrl.push(CreateNewPage, {
      type: "New Group"
    });
  }
}
