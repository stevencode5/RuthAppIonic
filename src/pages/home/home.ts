import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { ConsultarProductoPage } from '../administracion/productos/consultar-producto/consultar-producto';
import { ConfiguracionIdiomaPage } from '../configuracion-idioma/configuracion-idioma';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private translate: TranslateService, public navCtrl: NavController) {
    console.log(translate.getBrowserCultureLang());
    console.log(translate.getBrowserLang());
    console.log(translate.getDefaultLang());
    console.log(translate.getLangs());
  }

  public irAVistaProductos() {
    this.navCtrl.push(ConsultarProductoPage);
  }

  public irAVistaLenguaje() {
    this.navCtrl.push(ConfiguracionIdiomaPage);
  }

}