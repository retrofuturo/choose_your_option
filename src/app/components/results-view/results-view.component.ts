import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';


@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.scss']
})
export class ResultsViewComponent implements OnInit {

  results;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.showResults();
  }

  showResults() {
    this.results = this.questionsService.getResultsPercent();
  }

}
