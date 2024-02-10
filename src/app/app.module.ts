import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PtcformComponent } from './ptcform/ptcform.component';
import { PtclistComponent } from './ptclist/ptclist.component';
import { CtpfromComponent } from './ctpfrom/ctpfrom.component';
import { CtplistComponent } from './ctplist/ctplist.component';
import { OnchangeheaderComponent } from './onchangeheader/onchangeheader.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    PtcformComponent,
    PtclistComponent,
    CtpfromComponent,
    CtplistComponent,
    OnchangeheaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
