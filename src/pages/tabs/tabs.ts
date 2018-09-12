import { CreateWishPage } from '../create-wish/create-wish'
import { AboutPage } from '../about/about'
import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage ;
  tab2Root = CreateWishPage;
  tab3Root = AboutPage ;

  constructor() {

  }
}
