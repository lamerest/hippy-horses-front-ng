import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() activeLang: "RU" | "EN";

  isMobileMenuOpen = false;

  translateTable = {
    'О нас': 'About',
    'Дорожная карта': 'Roadmap',
    'Минт': 'Mint',
    'Команда': 'Team',
    'Амбассадоры': 'Ambassadors',
    'F.A.Q.': 'F.A.Q.',
  };

  @Input() menu: string[] = translations[Languages.EN].menu;

  @Output() languageChange = new EventEmitter<Languages>();

  changeLanguage() {
    this.activeLang = this.activeLang === 'RU' ? 'EN' : 'RU';
    const lang = this.activeLang === 'RU' ? Languages.RU : Languages.EN;
    this.languageChange.emit(lang);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToBlock(blockName: string) {
    switch (blockName) {
      case 'О нас':
        blockName = 'About';
        break;
      case 'Дорожная карта':
        blockName = 'Roadmap';
        break;
      case 'Чеканка':
        blockName = 'Mint';
        break;
      case 'Команда':
        blockName = 'Team';
        break;
      case 'Амбассадоры':
        blockName = 'Ambassadors';
        break;
    }

    const el = document.getElementById(blockName.toLowerCase());
    this.toggleMobileMenu();
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
