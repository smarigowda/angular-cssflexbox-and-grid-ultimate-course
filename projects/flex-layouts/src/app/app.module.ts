import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectLayoutComponent } from './object-layout/object-layout.component';
import { FixedFootLayoutComponent } from './fixed-foot-layout/fixed-foot-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectLayoutComponent,
    FixedFootLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
