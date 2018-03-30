import { TestBed, inject } from '@angular/core/testing';

import { CatdataService } from './catdata.service';

describe('CatdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatdataService]
    });
  });

  it('should be created', inject([CatdataService], (service: CatdataService) => {
    expect(service).toBeTruthy();
  }));
});
