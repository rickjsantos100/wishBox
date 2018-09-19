import { FirebaseAccessProvider } from './../../providers/firebase-access/firebase-access';
import { EditPage } from '../edit/edit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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
  
  public wishes = [];

  public test

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

    // SnapshotChanges Method

    this.firebaseAccessProvider.getWishes().subscribe(data=>{
      data.map(actions => {
          const data = actions.payload.doc.data() ;
          const id = actions.payload.doc.id;
          this.wishes.push({ id, ...data })
      })
      this.handleLoaders()
    })
    
    // ValueChanges Method
    // 
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
