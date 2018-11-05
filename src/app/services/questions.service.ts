import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  results = [
    {name: 'circus', value: 0},
    {name: 'theatre', value: 0},
    {name: 'zoo', value: 0}
  ];
  sum = 0;
  resultsPercent = [
    {name: 'circus', value: 0},
    {name: 'theatre', value: 0},
    {name: 'zoo', value: 0}
  ];

  constructor() { }

  addAnswer(answer) {

    let answNumber = 0;
    let answWeight = 1;

    answer.values.forEach(function (elem) {
      if (elem.value === true) {
        answNumber++;
      }
    });

    if ( answNumber !== 0 ) {
      answWeight = 1 / answNumber;
    }

    for (let i = 0; i < answer.values.length; i++) {
      if (answer.values[i].value === true) {
        this.results[i].value += answWeight;
      }
    }

    console.log(this.results);

    this.getResultsPercent();
  }

  getResultsPercent() {
    this.sum = 0;
    for (let i = 0; i < this.results.length; i++ ) {
      this.sum += this.results[i].value;
    }

    for (let i = 0; i < this.resultsPercent.length; i++ ) {
      this.resultsPercent[i].value = Math.round((this.results[i].value / this.sum) * 100);
    }
  console.log(this.resultsPercent);
    return this.resultsPercent;
  }
}
