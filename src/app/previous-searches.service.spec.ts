import { TestBed } from '@angular/core/testing';

import { PreviousSearchesService } from './previous-searches.service';

describe('PreviousSearchesService', () => {
  let service: PreviousSearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousSearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
