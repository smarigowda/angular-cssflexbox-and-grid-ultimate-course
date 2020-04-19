import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowImagesComponent } from './slideshow-images/slideshow-images.component';
import { SlideshowNonImagesComponent } from './slideshow-non-images/slideshow-non-images.component';


const routes: Routes = [
  { path: '', component: SlideshowImagesComponent },
  { path: 'non-images', component: SlideshowNonImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
