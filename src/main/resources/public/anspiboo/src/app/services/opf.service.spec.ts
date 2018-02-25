import { TestBed, inject } from '@angular/core/testing';

import { OpfService } from './opf.service';

describe('OpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpfService]
    });
  });

  it('should be created', inject([OpfService], (service: OpfService) => {
    expect(service).toBeTruthy();
  }));
});
