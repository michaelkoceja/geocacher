import { TestBed, inject } from '@angular/core/testing';

import { GeocallService } from './geocall.service';

describe('GeocallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocallService]
    });
  });

  it('should ...', inject([GeocallService], (service: GeocallService) => {
    expect(service).toBeTruthy();
  }));
});
