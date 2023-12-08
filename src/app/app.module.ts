import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviousComponent } from './shared/components/previous/previous.component';
import { NextComponent } from './shared/components/next/next.component';
import { CurrentComponent } from './shared/components/current/current.component';
import { MaterialModule } from './shared/components/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PreviousComponent,
    NextComponent,
    CurrentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
