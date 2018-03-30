import { TestBed, inject } from '@angular/core/testing';

import { EmaildataService } from './emaildata.service';

describe('EmaildataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmaildataService]
    });
  });

  it('should be created', inject([EmaildataService], (service: EmaildataService) => {
    expect(service).toBeTruthy();
  }));
});
