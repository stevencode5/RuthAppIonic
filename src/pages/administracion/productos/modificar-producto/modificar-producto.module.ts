import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarProductoPage } from './modificar-producto';

@NgModule({
  declarations: [
    ModificarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarProductoPage),
  ],
})
export class ModificarProductoPageModule {}
