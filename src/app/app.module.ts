//esta va a necesitar todo los modulos 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import del modulo de  plantilla
import { PlantillaModule } from './plantilla/plantilla.module';
//

@NgModule({
  declarations: [
    AppComponent
  ],
  //declara todo los modulo la palabra imports
  imports: [
    BrowserModule,
    AppRoutingModule,//esta son toda nuestra ruta iniciales para que pueda navegar entre pagina 
    PlantillaModule
  ],
  //
  providers: [],//esto es un servicio de que se alimenta de uan api una api es una ruta que se alimenta de una base de datso
  bootstrap: [AppComponent]//este es nuestro componente principal 
})
export class AppModule { }
// el app modulo va a ir todo los componentes
