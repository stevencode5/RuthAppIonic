import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { CrearProductoPage } from '../crear-producto/crear-producto';
import { ModificarProductoPage } from '../modificar-producto/modificar-producto';
import { ProductosProvider } from '../../../../providers/productos/productos';

@IonicPage()
@Component({
  selector: 'page-consultar-producto',
  templateUrl: 'consultar-producto.html',
})
export class ConsultarProductoPage {

  private productos: any;

  constructor(private proveedorProductos: ProductosProvider, private navCtrl: NavController, private translate: TranslateService) {
    proveedorProductos.getProductos().valueChanges()
      .subscribe((productosFB) => {
        this.productos = productosFB;
      });
  }

  public irAVistaAgregar(): void {
    this.navCtrl.push(CrearProductoPage);
  }

  public irAVistaModificar(producto): void {
    this.navCtrl.push(ModificarProductoPage, { producto: producto });
  }

  public eliminarProducto(producto): void {
    if (confirm(this.translate.instant("mensaje.confirmareliminacionproducto"))) {
      this.proveedorProductos.eliminarProducto(producto)
        .then(() => {
          alert(this.translate.instant("mensaje.productoeliminadoexitoso"));
        }
        );
    }
  }

}
