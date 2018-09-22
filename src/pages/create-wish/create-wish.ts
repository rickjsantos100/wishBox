import { FirebaseAccessProvider } from './../../providers/firebase-access/firebase-access';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getCurrentDate } from '../../utils';

/**
 * Generated class for the CreateWishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-wish',
  templateUrl: 'create-wish.html',
})
export class CreateWishPage {

  public wish = {
    id: null,
    createdAt: getCurrentDate(),
    title:"",
    reason: "",
    description: "",
    fulfillmentState: "pending",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseAccessProvider:FirebaseAccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateWishPage');
  }

  createWish(){
    this.firebaseAccessProvider.addWish(this.wish);
  }

}
