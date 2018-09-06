import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { CrearProductoPage } from '../crear-producto/crear-producto';
import { ModificarProductoPage } from '../modificar-producto/modificar-producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productos: any;

  constructor(public navCtrl: NavController, private translate: TranslateService) {
    this.productos = [
      { nombre: 'Papas', precio: 1500, cantidad: 5, imagen: 'papas.jpg' },
      { nombre: 'Doritos', precio: 1000, cantidad: 15, imagen: 'doritos.jpg' },
      { nombre: 'Chocorramo', precio: 1800, cantidad: 28, imagen: 'chocorramo.jpg' },
      { nombre: 'BomBomBum', precio: 300, cantidad: 32, imagen: 'bombombum.jpg' },
      { nombre: 'Jugo Hit', precio: 1600, cantidad: 20, imagen: 'hit.jpg' }]
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

  public irAVistaAgregar(){   
    this.navCtrl.push(CrearProductoPage);
  }

  public irAVistaModificar(producto){
    this.navCtrl.push(ModificarProductoPage, {producto: producto});    
  }

}
