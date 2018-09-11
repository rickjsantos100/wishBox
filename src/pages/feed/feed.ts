import { DetailsPage } from './../details/details';
import { MovieProvider } from '../../providers/movie/movie';
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
    MovieProvider
  ]
})
export class FeedPage {

  public movie_list = new Array<object>();
  public loader;
  public refresher;
  public infiniteScroll;
  public currentPage = 1

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.presentLoader();
    this.getLatestMovies();
  }



  getLatestMovies() {
    this.movieProvider.getLatestMovies(this.currentPage).subscribe(
      data => {
        const response = (data as any);
        this.movie_list = this.movie_list.concat(response.results)
        this.handleLoaders()
      },
      error => {
        this.handleLoaders()
        console.log(error)
      }
    )
  }

  handleLoaders() {
    if (this.loader) {
      this.loader.dismiss()
    }
    if (this.refresher) {
      this.refresher.complete()
    }
    if (this.infiniteScroll) {
      this.infiniteScroll.complete()
    }
  }

  navToDetailsPage(movie) {
    this.navCtrl.push(DetailsPage, { movieId: movie.id })
  }

  presentLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present()
  }

  handleRefresher(refresher) {
    this.refresher = refresher;
    this.getLatestMovies();
  }

  handleInfiniteScroll(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.currentPage = ++this.currentPage;
    this.getLatestMovies();
  }
}
