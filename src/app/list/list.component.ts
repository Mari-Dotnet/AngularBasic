import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
//@Input("CarsInput") cars:string[]=[]
cars:string[]=[]
Cardataupdated(cars:string[]){
  this.cars=cars;
}
}
