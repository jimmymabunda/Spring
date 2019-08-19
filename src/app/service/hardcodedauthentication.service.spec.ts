/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';

describe('Service: Hardcodedauthentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardcodedauthenticationService]
    });
  });

  it('should ...', inject([HardcodedauthenticationService], (service: HardcodedauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
