import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Array<String> = [];
  newQuoteText: String;


  addQuote() {
      this.quotes.push(this.newQuoteText);
      this.newQuoteText = '';
  }
}
