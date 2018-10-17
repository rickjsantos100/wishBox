
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '../../../node_modules/@angular/fire/firestore';
import { getCurrentDate } from '../../utils';


/*
  Generated class for the FirebaseAccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


interface ProtectionInfo {
  user: string;
  pass: string;
}


@Injectable()
export class FirebaseAccessProvider {


  constructor(public http: HttpClient, public angularFirestore: AngularFirestore) {
    console.log('Hello FirebaseAccessProvider Provider');
  }

  getWishes() {
    return this.angularFirestore.collection('wishes', ref => ref.orderBy('createdAt')).snapshotChanges();
  }

  addWish(wish) {
    console.log("CREATING");
    const date = getCurrentDate();
    return this.angularFirestore.collection('wishes').add({createdAt: date,displayDate: date.split(' ')[0], ... wish});
  }

  updateWish(wish) {
    console.log("UPDATING");
    const document= this.angularFirestore.collection(`wishes`).doc(wish.id);
    delete wish.id;
    document.update(wish);
  }

  deleteWish(wish){
    console.log('DELETING');
    this.angularFirestore.collection('wishes').doc(wish.id).delete();
  }

  async checkPassword(user, password) {
    let correct = false;
    await new Promise(resolve => {
      this.angularFirestore.collection('protection', ref => ref.where('user', '==', user)).valueChanges()
      .subscribe((data : Array<ProtectionInfo>) => {
        if(this.generateHash(password) === data[0]. pass){
          correct=true;
        }
        resolve();
      })
    })
    return correct;
  }

  

  generateHash(password) {
    if(!password){
      return '';
    }
    return String(password.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0));
  }


}
