import { TestBed } from '@angular/core/testing';

import { DateRangePickerService } from './date-range-picker.service';

describe('DateRangePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateRangePickerService = TestBed.get(DateRangePickerService);
    expect(service).toBeTruthy();
  });
});
