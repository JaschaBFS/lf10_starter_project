import { TestBed } from '@angular/core/testing';

import { QualiServiceService } from './quali-service.service';

describe('QualiServiceService', () => {
  let service: QualiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
