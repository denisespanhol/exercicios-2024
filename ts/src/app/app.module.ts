import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowMoreButtonComponent } from './components/show-more-button/show-more-button.component';
import { CreateFormsComponentComponent } from './components/create-forms-component/create-forms-component.component';
import { SuccessTopicSentComponent } from './components/success-topic-sent/success-topic-sent.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMoreButtonComponent,
    CreateFormsComponentComponent,
    SuccessTopicSentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
