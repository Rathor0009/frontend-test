import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let randomNumber: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dataService should return value that contains number', (async () => {
    service.subjectdata();
    let data;
    randomNumber = await service.dataState.subscribe((value: number) => {
      data = value;
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    });

    if (data) {
      expect(data).toBeGreaterThanOrEqual(0);
      expect(data).toBeLessThanOrEqual(10);
    }
    randomNumber.unsubscribe();
  }));
});
