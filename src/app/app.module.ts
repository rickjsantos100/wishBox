import { DetailsPageModule } from './../pages/details/details.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { AboutPageModule } from './../pages/about/about.module';
import { ConfigPageModule } from './../pages/config/config.module';
import { ConfigProvider } from './../providers/config/config';
import { IntroPageModule } from '../pages/intro/intro.module';
import { FeedPageModule } from '../pages/feed/feed.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { MovieProvider } from '../providers/movie/movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpClientModule,
    ConfigPageModule,
    AboutPageModule,
    ProfilePageModule,
    DetailsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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
