import { TestBed, inject } from '@angular/core/testing';

import { OrderdataService } from './orderdata.service';

describe('OrderdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderdataService]
    });
  });

  it('should be created', inject([OrderdataService], (service: OrderdataService) => {
    expect(service).toBeTruthy();
  }));
});
