import { Injectable } from '@angular/core';

/**
 * Wrapper for document object
 */
@Injectable()
export class DocumentRef {

  public constructor() {
  }

  public get nativeDocument(): Document {
    return document;
  }

}
