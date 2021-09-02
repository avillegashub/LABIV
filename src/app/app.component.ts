import { Component } from '@angular/core';
import { Usuario } from './classes/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1:number;
  num2:number;
  avg:number;
  sum:number;
  title = 'my-fist-project';
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.avg=0;
    this.sum = 0;
  }
  saludar(){console.log("Hola");}
  resultado(){
    this.sum = this.num1 + + this.num2;
    if(this.num2 != 0)
    this.avg = this.num1 / this.num2;
  }
  limpiar(){
    this.num1 = 0;
    this.num2 = 0;
    this.avg = 0;
    this.sum = 0;
    }

}


