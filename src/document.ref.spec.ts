/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentRef } from './document.ref';

describe('Service: DocumentRef', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentRef]
    });
  });

  it('should ...', inject([DocumentRef], (service: DocumentRef) => {
    expect(service).toBeTruthy();
  }));
});
