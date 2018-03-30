import { TestBed, inject } from '@angular/core/testing';

import { FeedbackdataService } from './feedbackdata.service';

describe('FeedbackdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackdataService]
    });
  });

  it('should be created', inject([FeedbackdataService], (service: FeedbackdataService) => {
    expect(service).toBeTruthy();
  }));
});
