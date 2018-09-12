import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidEnter() {
    console.log("edit.ts ", this.navParams.get("wish"))
    this.wish = this.navParams.get("wish")
  }


}
