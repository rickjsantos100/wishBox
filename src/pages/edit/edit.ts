import { FirebaseAccessProvider } from './../../providers/firebase-access/firebase-access';
import { EditWishFulfillmentStateModalPage } from './../modals/edit-wish-fulfillment-state-modal/edit-wish-fulfillment-state-modal';
import { EditWishTitleModalPage } from '../modals/edit-wish-title-modal/edit-wish-title-modal';
import { EditWishDescriptionModalPage } from '../modals/edit-wish-description-modal/edit-wish-description-modal';
import { EditWishReasonModalPage } from '../modals/edit-wish-reason-modal/edit-wish-reason-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public wish;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidEnter() {
    this.wish = this.navParams.get("wish")
  }

  editWishTitle(){
    const modal = this.modalController.create(EditWishTitleModalPage,{wish:this.wish});
    modal.present();
  }

  editWishFulfillmentState(){
    const modal = this.modalController.create(EditWishFulfillmentStateModalPage,{wish:this.wish});
    modal.present();
  }

  editWishReason(){
    const modal = this.modalController.create(EditWishReasonModalPage,{wish:this.wish});
    modal.present();
  }

  editWishDescription(){
    const modal = this.modalController.create(EditWishDescriptionModalPage,{wish:this.wish});
    modal.present();
  }

  saveWish(){
    this.firebaseAccessProvider.updateWish(this.wish);
  }


}
