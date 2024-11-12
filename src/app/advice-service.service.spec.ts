import { TestBed } from '@angular/core/testing';

import { AdviceServiceService } from './advice-service.service';

describe('AdviceServiceService', () => {
  let service: AdviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
