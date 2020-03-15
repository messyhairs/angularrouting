import { TestBed } from '@angular/core/testing';

import { SamplehotelService } from './samplehotel.service';

describe('SamplehotelService', () => {
  let service: SamplehotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplehotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
