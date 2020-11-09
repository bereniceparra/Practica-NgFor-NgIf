
import { Component } from '@angular/core';


@Component ({ 
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{ 

  mostrar = true;

  frase: any = {
    mensaje: 'No tengo amigos, y si un amor facil lo consigo,asi de facil lo e de perder',
    autor: 'Salsa'
  };
  personajes: string[] = ['Grupo Niche', 'Hector Lavoe', ' Maelo Ruiz']
  i = 1; 
}