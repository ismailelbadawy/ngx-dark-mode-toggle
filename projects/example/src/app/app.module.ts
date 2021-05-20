import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DarkModeToggleModule } from 'projects/dark-mode-toggle/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DarkModeToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
