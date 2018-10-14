import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'au-fa-input input'
})
export class InputRefDirective {

public focus = false;

  @HostListener('focus')
  public onFocus() {
      this.focus = true;
  }

  @HostListener('blur')
  public onBlur() {
    this.focus = false;
  }

}
