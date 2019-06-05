import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateRangePickerModule } from 'date-range-picker'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
