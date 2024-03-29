import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../../../providers/productos/productos';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-modificar-producto',
  templateUrl: 'modificar-producto.html',
})
export class ModificarProductoPage {

  private producto: any = {};

  constructor(private proveedorProductos: ProductosProvider, private navParams: NavParams, private navCtrl: NavController, private translate: TranslateService) {
    this.producto = navParams.get('producto');
  }

  public modificarProducto(): void {
    this.proveedorProductos.editarProducto(this.producto);
    console.log(this.producto);
    alert(this.translate.instant("mensaje.productomodificadoexitoso"));
    this.navCtrl.pop();
  }

}
