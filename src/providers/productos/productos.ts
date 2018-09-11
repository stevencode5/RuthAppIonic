import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductosProvider {

  constructor(public afDB: AngularFireDatabase) {

  }

  public getProductos() {
    return this.afDB.list('/productos/');
  }

  public getProducto(id) {
    return this.afDB.object('/productos/' + id);
  }

  public crearProducto(producto) {
    return this.afDB.database.ref('/productos/' + producto.id).set(producto);
  }

  public editarProducto(producto) {
    return this.afDB.database.ref('/productos/' + producto.id).set(producto);
  }

  public eliminarProducto(producto) {
    return this.afDB.database.ref('/productos/' + producto.id).remove();
  }

}
