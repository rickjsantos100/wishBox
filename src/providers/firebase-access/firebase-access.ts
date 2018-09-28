
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/@angular/fire/firestore';


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
    return this.angularFirestore.collection('wishes').snapshotChanges();
  }

  addWish(wish) {
    console.log("CREATING");
    return this.angularFirestore.collection('wishes').add(wish);
  }

  updateWish(wish) {
    console.log("updateWish(wish){ ", wish);
    this.angularFirestore.collection('wishes').doc(wish.id).update(wish);
  }

  async checkPassword(user, password) {
    let correct = false;
    await new Promise(resolve => {
      this.angularFirestore.collection('protection', ref => ref.where('user', '==', user)).valueChanges()
      .subscribe((data : Array<ProtectionInfo>) => {
        console.log('AAAAAAAAAAAAA ',this.generateHash(password) );
        console.log('AAAAAAAAAAAAA ',data[0].pass);
        if(this.generateHash(password) === data[0].pass){
          correct=true;
        }
        resolve();
      })
    })
    return correct;
  }

  

  generateHash(password) {
    return String(password.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0));
  }


}
