import { TestBed, inject } from '@angular/core/testing';

import { Global.ServiceService } from './global.service.service';

describe('Global.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Global.ServiceService]
    });
  });

  it('should be created', inject([Global.ServiceService], (service: Global.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
