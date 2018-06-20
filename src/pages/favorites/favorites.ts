import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { CreateNewPage } from '../create-new/create-new';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items =[];
    this.items.push({title: "Coffee, Cappucino, Sugar"});
    this.items.push({title: "Tea, Oolong, Milk & Sugar"});
    this.items.push({title: "Soda, Coca Cola"});
  }

  itemTapped(event, item) {
    
  }

  addNewFavorite(){
    this.navCtrl.push(CreateNewPage, {
      type: "Favorite"
    });
  }
}
