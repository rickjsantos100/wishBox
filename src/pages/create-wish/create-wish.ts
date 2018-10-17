import { FeedPage } from './../feed/feed';
import { FirebaseAccessProvider } from '../../providers/firebase-access/firebase-access';
import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CreateWishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-wish',
  templateUrl: 'create-wish.html',
})
export class CreateWishPage {

  public wish = {
    title: "",
    reason: "",
    description: "",
    fulfillmentState: "pending",
  }
  public fromFeedPage ;

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public firebaseAccessProvider: FirebaseAccessProvider) {
  }

  ionViewDidEnter() {
    this.fromFeedPage = this.navParams.get("fromFeed")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateWishPage');
  }

  createWish() {
    this.firebaseAccessProvider.addWish(this.wish);
    this.wish =  {
      title: "",
      reason: "",
      description: "",
      fulfillmentState: "pending",
    };
    if(this.fromFeedPage){
      this.navCtrl.pop();
    }else{
      this.app.getRootNav().push(FeedPage);
    }
  }

  async validatePassword(user, password) {
    return await this.firebaseAccessProvider.checkPassword(user, password);
  }

  showValidationAlert() {
    const prompt = this.alertController.create({
      title: 'Validar',
      message: `<p>Insere a password para validar a criação de um desejo desejo.</p><p>Um desejo apenas poderá ser criado na presença das duas entidades envolvidas.</p>`,
      inputs: [
        {
          name: 'inesPassword',
          placeholder: 'Inês Password',
          type: 'password'
        },
        {
          name: 'ricardoPassword',
          placeholder: 'Ricardo Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {

          }
        },
        {
          text: 'Guardar',
          handler: async (data) => {
            const ricardoValidated = this.validatePassword('ricardo', data.ricardoPassword);
            const inesValidated = this.validatePassword('ines', data.inesPassword);
            Promise.all([ricardoValidated, inesValidated]).then((values) => {
              if (values[0] && values[1]) {
                this.createWish();
              } else {
                return false
              }
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
