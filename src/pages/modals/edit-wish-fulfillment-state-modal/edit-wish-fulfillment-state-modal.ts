import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditWishFulfillmentStateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-wish-fulfillment-state-modal',
  templateUrl: 'edit-wish-fulfillment-state-modal.html',
})
export class EditWishFulfillmentStateModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWishFulfillmentStateModalPage');
  }

}
