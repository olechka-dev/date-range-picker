import { Injectable } from '@angular/core';
import { DAY_IN_MS } from '../date-range-picker.constants';

@Injectable({
  providedIn: 'root'
})
export class DateProcesserService {

  constructor() {
  }

  test() {
    return true;
  }

  getWeekStart(date: Date, weekStartDay: number) {
    let day = date.getDay();
    let diff = date.getDate() - day + weekStartDay;
    let copyDate = new Date(+date);

    let start = new Date(copyDate.setDate(diff));

    if(+start > +date) {
      start = new Date(+start - DAY_IN_MS*7);
    }
    return start;
  }
}
