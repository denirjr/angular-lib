import { Component,  Input, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements  AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(HTMLInputElement)
  input: HTMLInputElement;

  constructor() { }

  ngAfterContentInit(): void {
    console.log('input', this.input);
}

  get classes() {
    const cssClasses = {
      'fa': true
    };

    if (this.icon) {
      cssClasses ['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
