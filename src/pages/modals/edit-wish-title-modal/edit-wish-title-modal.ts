import { FirebaseAccessProvider } from './../../../providers/firebase-access/firebase-access';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditWishTitleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-wish-title-modal',
  templateUrl: 'edit-wish-title-modal.html',
})
export class EditWishTitleModalPage {

  public wish;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWishTitleModalPage');
    this.wish = this.navParams.get("wish");
  }

  
  closeModal(){
    this.navCtrl.pop();
  }

  saveWishTitle(){
    this.firebaseAccessProvider.updateWish(this.wish);
    this.navCtrl.pop(this.wish);
  }

}
