import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements AfterViewInit {
  @Input() question: any;
  @Input() index: number;

  height: string = 'unset';

  @ViewChild('answer') answer: ElementRef;

  isAnswerExpanded = true;

  ngAfterViewInit() {
    let multiplier;

    if (window.innerWidth >= 1920) {
      // Fixes ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.height = this.answer.nativeElement.offsetHeight + 'px';
        this.isAnswerExpanded = false;
      }, 0);
    } else {
      if (window.innerWidth >= 1000) {
        multiplier = 1.2;
      } else if (window.innerWidth >= 500) {
        multiplier = 1.3;
      } else {
        multiplier = 3.2;
      }

      const vw = (document.documentElement.clientWidth / 100) * multiplier;
      // Fixes ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.height = this.answer.nativeElement.offsetHeight / vw + 'rem';
        this.isAnswerExpanded = false;
      }, 0);
    }

    // Fixes bug. Transition must be added after component will be fully loaded and after all calculations, else there will be animation after reload
    setTimeout(() => {
      this.answer.nativeElement.style.transition = '0.3s ease-out';
    }, 200);
  }

  toggleAnswer() {
    this.isAnswerExpanded = !this.isAnswerExpanded;
  }
}
