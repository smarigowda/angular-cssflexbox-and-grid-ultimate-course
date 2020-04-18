import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  footerActive = false;
  defaultText = 'Terms, Privacy, Currency & more';
  footerButtonText: string;
  constructor() {
    this.footerButtonText = this.defaultText;
  }
  footerButtonClicked() {
    console.log('footer button clicked');
    this.footerActive = !this.footerActive;
    if (this.footerActive) {
      this.footerButtonText = 'Close X';
    } else {
      this.footerButtonText = this.defaultText;
    }
  }
}
