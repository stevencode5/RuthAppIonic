import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarProductoPage } from './consultar-producto';

@NgModule({
  declarations: [
    ConsultarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarProductoPage),
  ],
})
export class ConsultarProductoPageModule {}
