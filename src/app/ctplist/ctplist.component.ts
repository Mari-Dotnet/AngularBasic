import { Component } from '@angular/core';

@Component({
  selector: 'app-ctplist',
  templateUrl: './ctplist.component.html',
  styleUrl: './ctplist.component.css'
})
export class CtplistComponent {
  Employess:Employee[]=[];

  employeeupdated(outputdata:Employee[]){
    this.Employess=outputdata;
  }
}

interface Employee{
  Name: string;
  age: number;
  Address: string;
}
