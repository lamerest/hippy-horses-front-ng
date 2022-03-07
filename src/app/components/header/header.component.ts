import { Component } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeLang: 'RU' | 'EN' = 'EN';

  menu: string[] = translations[Languages.EN].menu;

  constructor(private readonly langService: LangService) {}

  changeLanguage() {
    this.activeLang = this.activeLang === 'RU' ? 'EN' : 'RU';
    this.langService.activeLang =
      this.activeLang === 'RU' ? Languages.RU : Languages.EN;
  }
}
