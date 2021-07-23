import { TestBed } from '@angular/core/testing';

import { NowPlayingServiceService } from './now-playing-service.service';

describe('NowPlayingServiceService', () => {
  let service: NowPlayingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowPlayingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
