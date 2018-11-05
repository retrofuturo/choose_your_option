import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';

const routes: Routes = [
  { path: '', component: QuestionFormComponent},
  { path: 'thank-you', component: ThankYouComponent},
  { path: 'results', component: ResultsViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
