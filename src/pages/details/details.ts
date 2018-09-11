import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public movie;
  public movieId;
  public loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider , public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.presentLoader();

    this.movieId = this.navParams.get("movieId")
    this.movieProvider.getMovieById(this.movieId).subscribe(data=>{
      this.movie = data;
      this.loader.dismiss()
    },error=>{
      console.log(error)
    })
  }

  presentLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present()
  }

}
