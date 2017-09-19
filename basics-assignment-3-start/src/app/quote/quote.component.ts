import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: ['.white{color: white}']
})
export class QuoteComponent implements OnInit {
  @Input()
  quoteText: String;

  @Input()
  index: Number;

  constructor() {
  }

  ngOnInit() {
  }

  getBgColor() {
    if (this.changeAppearance()) {
      return 'blue';
    }
  }

   changeAppearance() {
    return this.index > 4;
  }
}
