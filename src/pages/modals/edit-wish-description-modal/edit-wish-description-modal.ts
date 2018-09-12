import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditWishDescriptionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-wish-description-modal',
  templateUrl: 'edit-wish-description-modal.html',
})
export class EditWishDescriptionModalPage {

  public wish;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWishDescriptionModalPage');
    this.wish = this.navParams.get("wish");
  }


  closeModal(){
    this.navCtrl.pop();
  }

  saveWishDescription(value){
    this.wish.description = value;
    this.navCtrl.pop(this.wish);
  }

 
}
