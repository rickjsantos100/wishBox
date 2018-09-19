
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCurrentDate } from '../../utils';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/@angular/fire/firestore';


/*
  Generated class for the FirebaseAccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAccessProvider {

  public wishesCollection : AngularFirestoreCollection<Object>;

  constructor(public http: HttpClient, public angularFirestore: AngularFirestore) {
    console.log('Hello FirebaseAccessProvider Provider');
  }

  getWishes(){
    return this.angularFirestore.collection('wishes').snapshotChanges();
  }

  addWish(wish) {
    console.log("CREATING");
    return this.wishesCollection.add(wish);
  } 

  updateWish(wish){
    console.log("updateWish(wish){ ", wish);
    this.angularFirestore.collection('wishes').doc(wish.id).update(wish);
  }


}
