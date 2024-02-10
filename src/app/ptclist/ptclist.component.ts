import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-ptclist',
  templateUrl: './ptclist.component.html',
  styleUrl: './ptclist.component.css'
})
export class PtclistComponent {
 @Input("EmployeeList") Employess:Employee[]=[];
}

interface Employee{
  Name: string;
  age: number;
  Address: string;
}
