import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from '../../../node_modules/angularfire2/firestore';
import { getCurrentDate } from '../../utils';


/*
  Generated class for the FirebaseAccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAccessProvider {

  public wishesCollection : AngularFirestoreCollection<Object>;
  public wishes;

  constructor(public http: HttpClient, private angularFirestore: AngularFirestore) {
    console.log('Hello FirebaseAccessProvider Provider');

    console.log("rruuuuuuuuunnNNNNING");
    this.wishesCollection = angularFirestore.collection<Object>("wishes");
    this.wishes = this.wishesCollection.valueChanges()
    this.wishesCollection.get().subscribe(data=>{console.log("GGEEETTTTT ",data);})
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

  getObservableWishes(){
    return this.wishes
  }

}
