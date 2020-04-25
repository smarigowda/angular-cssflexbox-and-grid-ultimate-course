import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log($);
    // $('.slick-carousel').slick();

    $(document).ready(function () {
      $('.carousel').slick({
        slidesToShow: 3,
        dots: true,
        centerMode: true,
      });
    });
  }

}
