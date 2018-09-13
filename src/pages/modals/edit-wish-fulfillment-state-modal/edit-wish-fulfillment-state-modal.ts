import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EditWishFulfillmentStateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-wish-fulfillment-state-modal',
  templateUrl: 'edit-wish-fulfillment-state-modal.html',
})
export class EditWishFulfillmentStateModalPage {

  public wish;
  public gender;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWishFulfillmentStateModalPage');
    this.wish = this.navParams.get("wish")
  }

  closeModal() {
    this.navCtrl.pop();
  }

  saveWishFulfillmentState() {
    this.navCtrl.pop(this.wish);
  }

  showValidationAlert() {
    const prompt = this.alertController.create({
      title: 'Validar',
      message: `<p>Insere a password para validar a alteração do estado de execução do desejo.</p><p>Apenas o Executor dos desejos tem premissão para executar esta ação.</p> <p>Queres alterar o estado para <strong>${this.wish.fulfillmentState}</strong>?</p>`,
      inputs: [
        {
          name: 'password',
          placeholder: 'Password'
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
          handler: data => {
            if(this.validatePassword(data.password)){
              this.saveWishFulfillmentState()
            }else{
              return false
            }
          }
        }
      ]
    });
    prompt.present();
  }

  validatePassword(password){
    if(password){
      return true;
    }else{
      return false;
    }
  }

}
