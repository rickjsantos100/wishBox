import { EditWishDescriptionModalPage } from './../modals/edit-wish-description-modal/edit-wish-description-modal';
import { FirebaseAccessProvider } from './../../providers/firebase-access/firebase-access';
import { EditPage } from '../edit/edit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { getCurrentDate } from '../../utils';
import { AngularFirestore } from '../../../node_modules/@angular/fire/firestore';

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

  // public wish = {
  //   createdAt: getCurrentDate(),
  //   title:"Um desejo a ser completado",
  //   reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies, nisi nec luctus porta, justo elitjoin efficitur ligula, in interdum est diam vitae dolor. Duis dignissim nisl eleifend risus bibendum, nec vestibulum massa congue.",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies, nisi nec luctus porta, justo elit efficitur ligula, in interdum est diam vitae dolor. Duis dignissim nisl eleifend risus bibendum, nec vestibulum massa congue. Mauris pretium, sem sit amet gravida porttitor, purus ante porta odio, in convallis lacus ipsum et ante. Maecenas mattis metus urna, at placerat arcu auctor in. Phasellus vel enim odio. Phasellus vel venenatis ligula. Mauris porttitor, ante nec fermentum laoreet, massa enim eleifend felis, non malesuada neque turpis a tortor. Ut nec mauris tempus, posuere eros eget, congue nulla.L Aenean feugiat fermentum ante sed ultrices. Curabitur consectetur sollicitudin faucibus. Nullam aliquam nunc ac suscipit fringilla. Donec nec dui et odio molestie rutrum.",
  //   fulfillmentState: "pending",
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController,  public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidLoad() {
    this.presentLoader();
    this.getWishes();
  }

  



  // getLatestMovies() {
  //   this.movieProvider.getLatestMovies(this.currentPage).subscribe(
  //     data => {
  //       const response = (data as any);
  //       // this.movie_list = this.movie_list.concat(response.results)
  //       this.handleLoaders()
  //     },
  //     error => {
  //       this.handleLoaders()
  //       console.log(error)
  //     }
  //   )
  // }

  getWishes() {
    this.wishes =  this.firebaseAccessProvider.getWishes();
    this.handleLoaders()

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
    this.getWishes();
  }

  handleInfiniteScroll(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.currentPage = ++this.currentPage;
    this.getWishes();
  }
}
