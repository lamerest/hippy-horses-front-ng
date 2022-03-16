import { Component, OnInit } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  standardLang: Languages;

  Languages = Languages;

  text: any;

  ngOnInit() {
    this.standardLang =
      (localStorage.getItem('language') as any as Languages) ?? Languages.EN;
    console.log(this.standardLang);
    this.text = translations[this.standardLang];
  }

  changeActiveLang(newLang: Languages) {
    this.text = translations[newLang];
    this.standardLang = newLang;
    localStorage.setItem('language', newLang.toString());
  }
}
