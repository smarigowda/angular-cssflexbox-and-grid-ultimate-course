import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridTemplateAreaComponent } from './grid-template-area/grid-template-area.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBasicComponent,
    GridTemplateAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
