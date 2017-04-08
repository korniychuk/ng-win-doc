import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DocumentRef } from './document.ref';

/**
 * Wrapper for native window
 */
@Injectable()
export class WindowRef {

  /** You can use it for make infinite scroll */
  public scrolled$: Observable<ScrollEvent>;

  /** Use this flow instead of subscribe on resize event on window object directly */
  public resize$: Observable<UIEvent>;

  public constructor(
    private document: DocumentRef,
  ) {
    this.initScrollEvent();
    this.initResize();
  }

  public get nativeWindow(): Window {
    return window;
  }

  private initResize(): void {
    const win = this.nativeWindow;

    this.resize$ = Observable
      .fromEvent(win, 'resize')
      // .mapTo(null)
    ;
  }

  private initScrollEvent(): void {
    const win = this.nativeWindow;
    const doc = this.document.nativeDocument;

    this.scrolled$ = Observable
      .fromEvent(win, 'scroll')
      .map((nativeEvent: MouseEvent): ScrollEvent => {
        const bodyHeight   = doc.body.offsetHeight;
        const viewHeight   = win.innerHeight;
        const scrollTop    = doc.body.scrollTop;
        const offsetBottom = bodyHeight - (viewHeight + scrollTop);

        return { bodyHeight, viewHeight, scrollTop, offsetBottom, nativeEvent };
      })
      .share()
    ;
  } // end initScrollEvent()

}

export interface ScrollEvent {
  bodyHeight: number;
  viewHeight: number;
  scrollTop: number;
  offsetBottom: number;
  nativeEvent: MouseEvent;
}
