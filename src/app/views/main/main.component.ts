import { Component, OnInit } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  lang = Languages.EN;
  text = translations[this.lang];

  constructor(private readonly langService: LangService) {}

  ngOnInit(): void {
    this.langService.langChanged.subscribe((lang: Languages) => {
      this.lang = lang;
      this.text = translations[this.lang];
    });
  }
}
