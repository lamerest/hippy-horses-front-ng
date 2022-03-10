import { Component } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  text: any = translations[Languages.EN];

  changeActiveLang(newLang: Languages) {
    this.text = translations[newLang];
  }
}
