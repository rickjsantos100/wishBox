import { FirebaseAccessProvider } from './../../../providers/firebase-access/firebase-access';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditWishReasonModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-wish-reason-modal',
  templateUrl: 'edit-wish-reason-modal.html',
})
export class EditWishReasonModalPage {

  public wish;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWishReasonModalPage');
    this.wish = this.navParams.get("wish");
  }

  closeModal() {
    this.navCtrl.pop(); 
  } 

  saveWishReason() {
    this.firebaseAccessProvider.updateWish(this.wish);
    this.navCtrl.pop(this.wish);
  }



}
