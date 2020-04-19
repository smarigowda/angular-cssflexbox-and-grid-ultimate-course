import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slideshow-non-images',
  templateUrl: './slideshow-non-images.component.html',
  styleUrls: ['./slideshow-non-images.component.scss']
})
export class SlideshowNonImagesComponent implements OnInit {
  constructor() {
    console.log($);
  }

  ngOnInit(): void {
    $('.cycle-slideshow').cycle();
  }

}
