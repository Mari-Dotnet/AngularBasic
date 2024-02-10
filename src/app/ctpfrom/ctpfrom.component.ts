import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ctpfrom',
  templateUrl: './ctpfrom.component.html',
  styleUrl: './ctpfrom.component.css'
})
export class CtpfromComponent {
  @Output() EmployeesAdded:EventEmitter<Employee[]>=new EventEmitter();
  Employees:Employee[]=[];
  Name:string="";
  Age:number=0;
  Address:string="";
  AddEmployee=():void=>{
    this.Employees.push({"Name":this.Name,"age":this.Age,"Address":this.Address})
    this.clearvalue();
    this.EmployeesAdded.emit(this.Employees)
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