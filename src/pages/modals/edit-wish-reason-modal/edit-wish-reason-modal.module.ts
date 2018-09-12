import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWishReasonModalPage } from './edit-wish-reason-modal';

@NgModule({
  declarations: [
    EditWishReasonModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWishReasonModalPage),
  ],
})
export class EditWishReasonModalPageModule {}
