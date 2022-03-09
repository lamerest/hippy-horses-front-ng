import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  @Input() faqs = [
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
    {
      question: 'Lorem ipsum dolor sit',
      answer: 'Lorem ipsum dolor sit amet',
    },
  ];
}
