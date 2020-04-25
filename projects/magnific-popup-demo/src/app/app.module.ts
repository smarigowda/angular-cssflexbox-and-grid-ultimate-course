import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MagnificPopupComponent } from './magnific-popup/magnific-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MagnificPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
