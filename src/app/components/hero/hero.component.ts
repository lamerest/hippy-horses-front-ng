import { Component } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';
import { TranslatedComponent } from '../../common/translated-component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  text = translations[this.langService.activeLang].hero;

  constructor(public readonly langService: LangService) {
    // const getText = (lang: Languages) => {
    // this.text = translations[lang].hero;
    // };
    // super(langService, getText.bind(TranslatedComponent));
  }
}
