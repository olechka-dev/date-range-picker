import { DateProcesserService } from './date-processer.service';

fdescribe('DateProcesserService', () => {
  let service: DateProcesserService;
  beforeEach(() => {
    service = new DateProcesserService()
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test should return true', () => {
    let res = service.test();
    expect(res).toBeTruthy();
  });

  // it('getWeekForDate should return array of 7 dates', () => {
  //   let res = service.getWeekForDate(new Date(1559768400000), 0);
  //   let arrDates = [];
  //   for (let i = 0; i < 7; i++) {
  //     arrDates.push(new Date(1559336400000 + 86400000 * i));
  //   }
  //   expect(res).toEqual(arrDates);
  // });

});
