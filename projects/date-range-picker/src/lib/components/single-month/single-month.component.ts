import { Component, Input } from '@angular/core';

@Component({
  selector: 'drp-single-month',
  templateUrl: './single-month.component.html',
  styleUrls: ['./single-month.component.scss']
})
export class SingleMonthComponent {

  @Input() monthRange = [];
  @Input() currentMonth: Date;

  get monthWeekNumbers() {
    return (new Array(this.monthRange.length/7)).fill(0).map((item, i) => i);
  }

  constructor() { }

  onDatePicked(date: Date) {
    console.log('emmited date ', date);
  }

  getDisabledState(date) {
    let newDate = new Date(+date);
    return !(newDate.setDate(1) === +this.currentMonth);
  }

}
