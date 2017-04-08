/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowRef } from './window.ref';

describe('Service: WindowRef', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRef]
    });
  });

  it('should ...', inject([WindowRef], (service: WindowRef) => {
    expect(service).toBeTruthy();
  }));
});
