import { TestBed } from '@angular/core/testing';

import { DataGithubService } from './data-github.service';

describe('DataGithubService', () => {
  let service: DataGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
