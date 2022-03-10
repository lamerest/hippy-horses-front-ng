import { Component, OnInit } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  _standardLang = Languages.RU

  get standardLang() { return this._standardLang === Languages.EN? "EN" : "RU" }

  text: any = translations[this._standardLang];

  ngOnInit() {
    this._standardLang = localStorage.getItem('language') as any as Languages?? Languages.EN
    this.text = translations[this._standardLang]
    console.log(this._standardLang, this.standardLang);
    
  }

  changeActiveLang(newLang: Languages) {
    this.text = translations[newLang];
    this._standardLang = newLang
    localStorage.setItem("language", newLang.toString())
  }
}