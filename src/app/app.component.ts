import { TabsPage } from '../pages/tabs/tabs'
import { ConfigProvider } from '../providers/config/config'
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = this.getInitialPage();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private configProvider: ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  getInitialPage(){
    // const showSlider = this.configProvider.getConfigData("showSlider") 
    // if(showSlider ){
    //   return IntroPage;
    // }else{
      return TabsPage;
    // }
  }
}
