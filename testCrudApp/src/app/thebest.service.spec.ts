import { TestBed, inject } from '@angular/core/testing';

import { ThebestService } from './thebest.service';

describe('ThebestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThebestService]
    });
  });

  it('should be created', inject([ThebestService], (service: ThebestService) => {
    expect(service).toBeTruthy();
  }));
});
