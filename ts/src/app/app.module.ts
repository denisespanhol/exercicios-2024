import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowMoreButtonComponent } from './components/show-more-button/show-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMoreButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
