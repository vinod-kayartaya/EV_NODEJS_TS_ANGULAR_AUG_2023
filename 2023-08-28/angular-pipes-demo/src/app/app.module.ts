import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PowerPipe } from './pipes/power.pipe';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { FirstWordPipe } from './pipes/first-word.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PowerPipe, PipesDemoComponent, FirstWordPipe, ReversePipe],
  imports: [
    // CommonModule, // included by default
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
