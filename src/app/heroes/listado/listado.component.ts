import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeFinal: string= '';

  borrarHeroe(){
    this.heroeFinal  = this.heroes.pop() || '';

  }

}



