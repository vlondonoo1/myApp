import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-task',
  templateUrl: 'details-task.html',
})
export class DetailsTaskPage {
	selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsTaskPage');
  }

}
