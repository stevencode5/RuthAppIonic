import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-configuracion-idioma',
  templateUrl: 'configuracion-idioma.html',
})
export class ConfiguracionIdiomaPage {

  private lenguaje: string;

  constructor(private translate: TranslateService) {
    this.lenguaje = translate.getBrowserLang();
  }

  public cambiarLenguaje(): void {
    console.log("Lenguaje seleccionado : " + this.lenguaje);
    this.translate.use(this.lenguaje);
  }

}
