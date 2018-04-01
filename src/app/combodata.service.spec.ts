import { TestBed, inject } from '@angular/core/testing';

import { CombodataService } from './combodata.service';

describe('CombodataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombodataService]
    });
  });

  it('should be created', inject([CombodataService], (service: CombodataService) => {
    expect(service).toBeTruthy();
  }));
});
