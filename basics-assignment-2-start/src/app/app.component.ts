import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isResetDisabled: boolean = true;
  userName: String;

  clearUserName() {
    this.userName = '';
  }

  userNameChangeListener() {
    if (this.userName.length > 0) {
      this._isResetDisabled = false;
    } else {
      this._isResetDisabled = true;
    }
  }
}
