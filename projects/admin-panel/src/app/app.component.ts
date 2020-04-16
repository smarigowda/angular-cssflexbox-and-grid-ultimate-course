import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLeftArrow = true;
  showRightArrow = false;
  leftContentClickHandler() {
    console.log('left content div clicked...');
    this.showLeftArrow = !this.showLeftArrow;
    this.showRightArrow = !this.showRightArrow;
  }
}
