import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  //este export se crea para que pueda ser importado en la app.nodules
  exports:[HeaderComponent]
  //
})
export class PlantillaModule { }
