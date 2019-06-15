import { NgModule } from '@angular/core';
import { DateRangePickerComponent } from './date-range-picker.component';
import { SingleDateComponent } from './components/single-date/single-date.component';
import { SingleMonthComponent } from './components/single-month/single-month.component';
import { CommonModule } from '@angular/common';
import { SingleCalendarComponent } from './components/single-calendar/single-calendar.component';

@NgModule({
  declarations: [DateRangePickerComponent, SingleDateComponent, SingleMonthComponent, SingleCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [DateRangePickerComponent]
})
export class DateRangePickerModule { }
