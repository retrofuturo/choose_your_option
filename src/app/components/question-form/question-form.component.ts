import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  holidayOptions = {
    values: [
      {name: 'circus', value: false},
      {name: 'theatre', value: false},
      {name: 'zoo', value: false},
    ],
    none: true
  };

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onToggle() {
    for (let i = 0; i < this.holidayOptions.values.length; i++) {
      if (this.holidayOptions.values[i].value === true) {
        this.holidayOptions.none = false;
        break;
      } else {
        this.holidayOptions.none = true;
      }
    }
  }

  onSubmit(form) {

    this.questionsService.addAnswer(this.holidayOptions);

    this.router.navigate(['/thank-you']);
  }
}
