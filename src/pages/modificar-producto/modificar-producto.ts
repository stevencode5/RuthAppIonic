import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

@IonicPage()
@Component({
  selector: 'page-modificar-producto',
  templateUrl: 'modificar-producto.html',
})
export class ModificarProductoPage {

  producto: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedorProductos: ProductosProvider) {
    this.producto = navParams.get('producto');
    console.log('en el constructuror de modificarProdcutopage '+this.producto);
  }

  public modificarProducto() {
    this.proveedorProductos.editarProducto(this.producto);
    console.log(this.producto);
    alert("Modificado con exito !");
    this.navCtrl.pop();
  }

}
