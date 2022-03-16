import { Component } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  Languages = Languages;

  text: any = translations[Languages.RU];

  changeActiveLang(newLang: Languages) {
    setTimeout(() => {
      this.text = translations[newLang];
    }, 0);
  }
}
