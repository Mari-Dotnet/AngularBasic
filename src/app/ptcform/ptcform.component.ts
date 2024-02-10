import { Component } from '@angular/core';

@Component({
  selector: 'app-ptcform',
  templateUrl: './ptcform.component.html',
  styleUrl: './ptcform.component.css'
})
export class PtcformComponent {
Employees:Employee[]=[];
Name:string="";
Age:number=0;
Address:string="";
AddEmployee=():void=>{
  this.Employees.push({"Name":this.Name,"age":this.Age,"Address":this.Address})
  this.clearvalue();
  console.log("Employee Details",this.Employees)
}

clearvalue(){
  this.Name="";
  this.Age=0;
  this.Address="";

}

}
interface Employee{
  Name: string;
  age: number;
  Address: string;
}