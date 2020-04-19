import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowImagesComponent } from './slideshow-images/slideshow-images.component';
import { SlideshowNonImagesComponent } from './slideshow-non-images/slideshow-non-images.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowImagesComponent,
    SlideshowNonImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
