import { TestBed } from '@angular/core/testing';

import { RavanService } from './ravan.service';

describe('RavanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RavanService = TestBed.get(RavanService);
    expect(service).toBeTruthy();
  });
});
