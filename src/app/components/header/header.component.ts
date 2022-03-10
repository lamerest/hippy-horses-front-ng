import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeLang: 'RU' | 'EN' = 'EN';

  @Input() menu: string[] = translations[Languages.EN].menu;

  @Output() languageChange = new EventEmitter<Languages>();

  changeLanguage() {
    this.activeLang = this.activeLang === 'RU' ? 'EN' : 'RU';
    const lang = this.activeLang === 'RU' ? Languages.RU : Languages.EN;
    this.languageChange.emit(lang);
  }

  openMobileMenu() {
    
  }
}
