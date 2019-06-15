import { Component, OnInit } from '@angular/core';
import { DateProcesserService } from '../../services/date-processer.service';
import { DAY_IN_MS, MONTHS } from '../../date-range-picker.constants';

@Component({
  selector: 'drp-single-calendar',
  templateUrl: './single-calendar.component.html',
  styleUrls: ['./single-calendar.component.scss']
})
export class SingleCalendarComponent implements OnInit {
  monthName: string;
  monthRange: Date[] = [];
  currentMonth: Date;
  firstDayOfWeek: number = 0;

  set setCurMonth(date) {

    let firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    this.currentMonth = firstDateOfMonth;
    let lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let monthViewStartDate = this.dateService.getWeekStart(firstDateOfMonth, this.firstDayOfWeek);
    let monthViewEndDate = new Date(+this.dateService.getWeekStart(lastDateOfMonth, this.firstDayOfWeek) + DAY_IN_MS * 6);
    this.monthRange = [];
    this.monthRange[0] = new Date(monthViewStartDate);
    while (this.monthRange[this.monthRange.length-1] < monthViewEndDate) {
      let tmp = new Date(+this.monthRange[this.monthRange.length-1]);
      this.monthRange.push(new Date(tmp.setDate(tmp.getDate()+1)));
    }

    this.monthName = MONTHS[this.currentMonth.getMonth()];
  }

  constructor(private dateService: DateProcesserService) {
  }

  ngOnInit() {
    this.setCurMonth = new Date();
  }

  switchMonth(diff) {
    this.currentMonth.setMonth(this.currentMonth.getMonth()+diff);
    this.setCurMonth = this.currentMonth;
  }

}
