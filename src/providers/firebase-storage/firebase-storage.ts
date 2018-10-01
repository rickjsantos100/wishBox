import { AngularFireModule } from '@angular/fire';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '../../../node_modules/@angular/fire/storage';
import * as firebase from 'firebase';

/*
  Generated class for the FirebaseStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseStorageProvider {


  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }

  // getFiles() {
  //   let ref = this.db.list('files');

  //   return ref.snapshotChanges().map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   });
  // }

  uploadToStorage(){
    console.log('UPLOADING');
    let newName = `${new Date().getTime()}.txt`;
    const image = "data:image/jpeg;base64,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";

    // using this code you can add a base 64 image to the images folder in the firebase storage 
    return this.afStorage.ref(`images/${newName}`).putString(image,'data_url');


  }



  deleteFile() {
    // This code can be used to delete files from storage 
     this.afStorage.ref(`images/1538412540309.txt`).delete();
  }


}
