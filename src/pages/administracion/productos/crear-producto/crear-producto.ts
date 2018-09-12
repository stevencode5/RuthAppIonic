import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProductosProvider } from '../../../../providers/productos/productos';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})
export class CrearProductoPage {

  private producto: any = {};

  constructor(private proveedorProductos: ProductosProvider, private navCtrl: NavController, private translate: TranslateService) {
  }

  public guardarProducto(): void {
    this.producto.id = Date.now();
    this.proveedorProductos.crearProducto(this.producto);
    console.log(this.producto);
    alert(this.translate.instant("mensaje.productoguardadoexitoso"));
    this.navCtrl.pop();
  }

}
