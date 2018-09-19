
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
  public wishes: Observable<any[]>;
  ;

  constructor(public http: HttpClient, public angularFirestore: AngularFirestore) {
    console.log('Hello FirebaseAccessProvider Provider');
    // this.wishesCollection = angularFirestore.collection<Object>("wishes");
    // this.wishes = this.wishesCollection.snapshotChanges();

  }

  getWishes(){
    return this.angularFirestore.collection('wishes').snapshotChanges();
  }

  addWish() {
    console.log("CREATING");
    // return this.wishesCollection.add({
    //   createdAt: getCurrentDate(),
    //   title:"Um desejo a ser completado",
    //   reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies, nisi nec luctus porta, justo elitjoin efficitur ligula, in interdum est diam vitae dolor. Duis dignissim nisl eleifend risus bibendum, nec vestibulum massa congue.",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies, nisi nec luctus porta, justo elit efficitur ligula, in interdum est diam vitae dolor. Duis dignissim nisl eleifend risus bibendum, nec vestibulum massa congue. Mauris pretium, sem sit amet gravida porttitor, purus ante porta odio, in convallis lacus ipsum et ante. Maecenas mattis metus urna, at placerat arcu auctor in. Phasellus vel enim odio. Phasellus vel venenatis ligula. Mauris porttitor, ante nec fermentum laoreet, massa enim eleifend felis, non malesuada neque turpis a tortor. Ut nec mauris tempus, posuere eros eget, congue nulla.L Aenean feugiat fermentum ante sed ultrices. Curabitur consectetur sollicitudin faucibus. Nullam aliquam nunc ac suscipit fringilla. Donec nec dui et odio molestie rutrum.",
    //   fulfillmentState: "pending",
    // });
  } 

  updateWish(){

  }

  getObservableWishes(){
    return this.wishes
  }

}
