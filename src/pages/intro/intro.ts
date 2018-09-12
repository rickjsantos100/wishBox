import { ConfigProvider } from '../../providers/config/config'
import { TabsPage } from '../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private configProvider: ConfigProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  navToTabsPage(){
    this.navCtrl.push(TabsPage);
    this.configProvider.setConfigData({showSlider:false})
  }


}
