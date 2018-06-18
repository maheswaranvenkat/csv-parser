import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {SortingCompaniesPipe} from "./pipes/sorting-companies.pipe";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SortingCompaniesPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
