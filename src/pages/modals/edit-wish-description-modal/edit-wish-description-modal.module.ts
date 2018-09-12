import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWishDescriptionModalPage } from './edit-wish-description-modal';

@NgModule({
  declarations: [
    EditWishDescriptionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWishDescriptionModalPage),
  ],
})
export class EditWishDescriptionModalPageModule {}
