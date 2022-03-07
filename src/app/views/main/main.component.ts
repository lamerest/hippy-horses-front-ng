import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  lang = Languages.EN;

  constructor(private readonly langService: LangService) {}

  ngOnInit(): void {
    this.langService.langChanged.subscribe((lang: Languages) => {
      this.lang = lang;
    });
  }
}
