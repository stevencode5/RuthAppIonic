import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductosProvider } from '../providers/productos/productos';
import { CrearProductoPage } from '../pages/administracion/productos/crear-producto/crear-producto';
import { ModificarProductoPage } from '../pages/administracion/productos/modificar-producto/modificar-producto';
import { ConsultarProductoPage } from '../pages//administracion/productos/consultar-producto/consultar-producto';
import { ConfiguracionIdiomaPage } from '../pages/configuracion-idioma/configuracion-idioma';

export const firebaseConfig = {
  apiKey: "AIzaSyASQQ68c7K5nI8_lvexDAS05_qGUJxmIDs",
  authDomain: "ruthapppru.firebaseapp.com",
  databaseURL: "https://ruthapppru.firebaseio.com",
  projectId: "ruthapppru",
  storageBucket: "ruthapppru.appspot.com",
  messagingSenderId: "858989404623"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultarProductoPage,
    CrearProductoPage,
    ModificarProductoPage,
    ConfiguracionIdiomaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultarProductoPage,
    CrearProductoPage,
    ModificarProductoPage,
    ConfiguracionIdiomaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductosProvider
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}