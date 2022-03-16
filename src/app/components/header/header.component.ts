import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() activeLang: Languages;

  Languages = Languages;

  isMobileMenuOpen = false;

  translateTable = {
    'О нас': 'About',
    'Дорожная карта': 'Roadmap',
    Минт: 'Mint',
    Команда: 'Team',
    Амбассадоры: 'Ambassadors',
    'F.A.Q.': 'F.A.Q.',
  };

  @Input() menu: string[] = translations[Languages.EN].menu;

  @Output() languageChange = new EventEmitter<Languages>();

  changeLanguage() {
    this.activeLang =
      this.activeLang === Languages.EN ? Languages.RU : Languages.EN;
    this.languageChange.emit(this.activeLang);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
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
    this.closeMobileMenu();
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
