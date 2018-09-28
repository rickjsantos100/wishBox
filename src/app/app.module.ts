import { firebaseConfig } from './../environment/environment';
import { EditWishFulfillmentStateModalPageModule } from './../pages/modals/edit-wish-fulfillment-state-modal/edit-wish-fulfillment-state-modal.module';
import { EditWishTitleModalPageModule } from '../pages/modals/edit-wish-title-modal/edit-wish-title-modal.module';
import { EditWishDescriptionModalPageModule } from '../pages/modals/edit-wish-description-modal/edit-wish-description-modal.module';
import { EditWishReasonModalPageModule } from '../pages/modals/edit-wish-reason-modal/edit-wish-reason-modal.module';
import { EditPageModule } from '../pages/edit/edit.module';
import { CreateWishPageModule } from '../pages/create-wish/create-wish.module'
import { AboutPageModule } from '../pages/about/about.module'
import { ConfigProvider } from '../providers/config/config'
import { IntroPageModule } from '../pages/intro/intro.module';
import { FeedPageModule } from '../pages/feed/feed.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { FirebaseAccessProvider } from '../providers/firebase-access/firebase-access';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '../../node_modules/@angular/fire';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpClientModule,
    AboutPageModule,
    EditPageModule,
    CreateWishPageModule,
    EditWishReasonModalPageModule,
    EditWishDescriptionModalPageModule,
    EditWishTitleModalPageModule,
    EditWishFulfillmentStateModalPageModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigProvider,
    FirebaseAccessProvider
  ]
})
export class AppModule { }
