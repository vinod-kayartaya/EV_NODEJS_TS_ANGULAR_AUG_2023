import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PowerPipe } from './pipes/power.pipe';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PowerPipe],
  imports: [
    // CommonModule, // included by default
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
