import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-magnific-popup',
  templateUrl: './magnific-popup.component.html',
  styleUrls: ['./magnific-popup.component.scss']
})
export class MagnificPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log($('.popup-gallery'));
    // $(document).ready(function () {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small>Pappadams Gallery</small>';
        }
      }
    });
    // });
  }
}
