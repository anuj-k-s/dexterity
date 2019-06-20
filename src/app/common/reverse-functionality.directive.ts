import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appReverseFunctionality]'
})
export class ReverseFunctionalityDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
  }

}


