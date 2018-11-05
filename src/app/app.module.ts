import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ThankYouComponent,
    ResultsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
