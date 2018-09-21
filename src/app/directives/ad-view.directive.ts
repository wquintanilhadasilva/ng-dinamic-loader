import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-view]'
})
export class AdViewDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
