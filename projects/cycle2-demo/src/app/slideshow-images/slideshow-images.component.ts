import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slideshow-images',
  templateUrl: './slideshow-images.component.html',
  styleUrls: ['./slideshow-images.component.scss']
})
export class SlideshowImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.cycle-slideshow').cycle();
  }

}
