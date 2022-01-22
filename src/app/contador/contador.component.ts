import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ title }}</h1>

        <button (click)="acumular('suma')"> + </button>
        <span>{{ numero }}</span>
        <button (click)="acumular('resta')"> - </button>

    `
})


export class ContadorComponent{
    public title = 'Contador App';
    numero:number = 10;
  
    acumular(valor:string){
      if(valor == 'suma'){
         this.numero +=5;
      }else{
         this.numero -=5;
      }
    }
}