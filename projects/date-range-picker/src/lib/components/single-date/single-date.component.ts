import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drp-single-date',
  templateUrl: './single-date.component.html',
  styleUrls: ['./single-date.component.scss']
})
export class SingleDateComponent implements OnInit {
  @Input() singleDate: Date;
  @Input() isDisabled: boolean;
  @Output('onDatePicked') dateEmitter = new EventEmitter<Date>();
  dateNumber: number;

  constructor() {
  }

  ngOnInit() {
    this.dateNumber = this.singleDate.getDate();
  }

  onDateSelected() {
    if(!this.isDisabled) {
      this.dateEmitter.emit(this.singleDate);
    }
  }

}
