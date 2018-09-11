import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { CrearProductoPage } from '../crear-producto/crear-producto';
import { ModificarProductoPage } from '../modificar-producto/modificar-producto';
import { ProductosProvider } from '../../providers/productos/productos';

@IonicPage()
@Component({
  selector: 'page-consultar-producto',
  templateUrl: 'consultar-producto.html',
})
export class ConsultarProductoPage {


  productos: any;

  constructor(public proveedorProductos: ProductosProvider, public navCtrl: NavController, private translate: TranslateService) {
    proveedorProductos.getProductos().valueChanges()
      .subscribe((productosFB) => {
        this.productos = productosFB;
      });
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

  public irAVistaAgregar() {
    this.navCtrl.push(CrearProductoPage);
  }

  public irAVistaModificar(producto) {
    console.log('Modificar producto : ' + producto);
    this.navCtrl.push(ModificarProductoPage, { producto: producto });
  }

  public eliminarProducto(producto) {
    if (confirm("¿Seguro que desea borrar este lugar?")) {
      console.log('Eliminar producto : ' + producto);
      this.proveedorProductos.eliminarProducto(producto)
        .then(() => {
          alert("El producto  " + producto.nombre + " se elimino exitosamente !");
        }
        );
    }
  }

}
