import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent {
  @Input() text: any;

  isEven(el: number) {
    return (el + 1) % 2 === 0;
  }
}
