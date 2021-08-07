import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//creamos
//los array siempre van en corchetes []
public itemsMenu=[
  {nombre:'Incio',icono:'fa fa-home'},
  {nombre:'Acerca',icono:'fa fa-iser'},
  {nombre:'Servicio',icono:'fa fa-home'},
  {nombre:'Experiencia',icono:'fa fa-home'},
  {nombre:'Otro',icono:'fa fa-home'}
]


 //creamos para que nuestro menu desplegable 
  public showMenu:boolean =false
  constructor() { }


  // OnInit  sirve para que se ejecute apena se inicie a pagina 
  ngOnInit(): void {
  for (const items of this.itemsMenu) {
    console.log(items)
  }
  }
//--fin del OnInit
 
//el void no devuelve nada 
   cambioEstadoMenu():void{
     this.showMenu= !this.showMenu;

   }

}

