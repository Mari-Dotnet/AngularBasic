import { Component,Input,OnChanges, SimpleChanges,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-onchangeheader',
  templateUrl: './onchangeheader.component.html',
  styleUrl: './onchangeheader.component.css'
})
export class OnchangeheaderComponent implements OnChanges,OnInit,OnDestroy {
ngOnDestroy(): void {
  console.log("ondestory called")
}

ngOnChanges(changes: SimpleChanges): void {
  //console.log("OnChanges called namechange",changes['nameparent'])
  //console.log("OnChanges called titleparent",changes['titleparent'])
  console.log("ng onchange called")
}

ngOnInit(): void {
  console.log("ng onint called")
}
@Input("titleparent") titleparent:string=""
@Input ("namechange") nameparent:string=""

}
