import { FirebaseAccessProvider } from './../../providers/firebase-access/firebase-access';
import { EditPage } from '../edit/edit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { map } from 'rxjs/operators';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
  ]
})
export class FeedPage {

  public loader;
  public refresher;
  public infiniteScroll;
  public currentPage = 1
  
  public wishes;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController,  public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidLoad() {
    this.loadFeed();
  }

  loadFeed(){
    this.presentLoader();
    this.getWishes();
  }

  getWishes() {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, ",this.firebaseAccessProvider.getWishes().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() ;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    // this.firebaseAccessProvider.getWishes().subscribe(data=>{
    //   console.log("BBBBBBBBBBBBBBBBBBBBBBBBB ",data);
    //   this.wishes = data
    //   this.handleLoaders()
    // })
  }

  handleLoaders() {
    if (this.loader) {
      this.loader.dismiss()
    }
    if (this.refresher) {
      this.refresher.complete()
    }
    // if (this.infiniteScroll) {
    //   this.infiniteScroll.complete()
    // }
  }

  

  navToEditPage(wish) {
    this.navCtrl.push(EditPage, { wish:wish })
  }

  presentLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present()
  }

  handleRefresher(refresher) {
    this.refresher = refresher;
    this.loadFeed();
  }

  handleInfiniteScroll(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.currentPage = ++this.currentPage;
    this.getWishes();
  }
}
