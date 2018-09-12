import { EditPageModule } from './../pages/edit/edit.module';
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
import { MovieProvider } from '../providers/movie/movie';

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
    CreateWishPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    ConfigProvider
  ]
})
export class AppModule {}
