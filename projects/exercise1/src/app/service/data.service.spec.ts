import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns the message', () => {
    let message: any;
    service.getMessage().subscribe((data) => {
      message = data;
    });
    expect(message).toBe('Success');
  });
});
