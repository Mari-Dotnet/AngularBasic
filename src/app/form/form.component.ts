import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]>= new EventEmitter()
car:string[]=[];
carname:string="";
AddCar=():void=>{
  this.car.push(this.carname)
  console.log("cars list", this.car)
  this.carname='';
  this.carAdded.emit(this.car);
}
}
