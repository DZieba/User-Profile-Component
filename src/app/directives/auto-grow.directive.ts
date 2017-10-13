import {Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[AutoGrow]'
})
export class AutoGrowDirective {

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {

  }

  constructor(public element: ElementRef) {
  }

}
