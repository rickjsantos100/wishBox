import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWishTitleModalPage } from './edit-wish-title-modal';

@NgModule({
  declarations: [
    EditWishTitleModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWishTitleModalPage),
  ],
})
export class EditWishTitleModalPageModule {}
