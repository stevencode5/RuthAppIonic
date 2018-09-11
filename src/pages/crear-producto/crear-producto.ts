import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})
export class CrearProductoPage {

  producto: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedorProductos: ProductosProvider, private translate: TranslateService) {
  }

  public guardarProducto() {
    this.producto.id = Date.now();
    this.proveedorProductos.crearProducto(this.producto);
    console.log(this.producto);
    alert(this.translate.instant("mensaje.productoguardadoexitoso"));
    this.navCtrl.pop();
  }

}
