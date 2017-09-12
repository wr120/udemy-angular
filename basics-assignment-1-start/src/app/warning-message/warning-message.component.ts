import {Component} from "@angular/core";

@Component(
  {
    selector: '.warning-message',
    template: `<div class="warning alert-warning">warning-message works!</div>`,
    styles: [`.warning{
      color: red;
    }`]

  }
  )
export class WarningMessageComponent {


}
