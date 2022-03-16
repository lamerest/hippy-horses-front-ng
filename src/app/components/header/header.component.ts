import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Languages } from 'src/app/i18n/translations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  _activeLang: Languages =
    +(localStorage.getItem('language') as any as Languages) ?? Languages.EN;

  get activeLang() {
    return this._activeLang;
  }

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

  @Input() menu: string[];

  @Output() languageChange = new EventEmitter<Languages>();

  ngOnInit() {
    this.languageChange.emit(this.activeLang);
  }

  changeLanguage() {
    this._activeLang =
      this.activeLang === Languages.EN ? Languages.RU : Languages.EN;
    this.languageChange.emit(this.activeLang);
    localStorage.setItem('language', this.activeLang.toString());
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
