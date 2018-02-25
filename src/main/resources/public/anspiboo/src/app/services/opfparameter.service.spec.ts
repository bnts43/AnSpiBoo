import { TestBed, inject } from '@angular/core/testing';

import { OpfparameterService } from './opfparameter.service';

describe('OpfparameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpfparameterService]
    });
  });

  it('should be created', inject([OpfparameterService], (service: OpfparameterService) => {
    expect(service).toBeTruthy();
  }));
});
