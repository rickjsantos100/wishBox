import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateWishPage } from './create-wish';

@NgModule({
  declarations: [
    CreateWishPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateWishPage),
  ],
})
export class CreateWishPageModule {}
