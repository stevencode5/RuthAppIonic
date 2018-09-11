import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-configuracion-idioma',
  templateUrl: 'configuracion-idioma.html',
})
export class ConfiguracionIdiomaPage {

  lenguaje: string;

  constructor(private translate: TranslateService, public navCtrl: NavController) {
    this.lenguaje = translate.getBrowserLang();
  }

  public cambiarLenguaje() {
    console.log("Lenguaje seleccionado : " + this.lenguaje);
    this.translate.use(this.lenguaje);
  }

}
