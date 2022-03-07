import { Component } from '@angular/core';
import { translations } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent {
  text = translations[this.langService.activeLang].roadmap;

  constructor(private readonly langService: LangService) {}

  isEven(el: number) {
    return (el + 1) % 2 === 0;
  }
}
