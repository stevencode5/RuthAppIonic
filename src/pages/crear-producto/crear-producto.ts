import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

@IonicPage()
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-producto.html',
})
export class CrearProductoPage {

  producto: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedorProductos: ProductosProvider) {
  }

  public guardarProducto() {
    this.producto.id = Date.now();
    this.proveedorProductos.crearProducto(this.producto);
    console.log(this.producto);
    alert("Guardado con exito !");
    this.navCtrl.pop();
  }

}
