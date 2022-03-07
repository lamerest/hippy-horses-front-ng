import { Component } from '@angular/core';
import { Languages, translations } from 'src/app/text/translations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu: string[] = translations[Languages.EN].menu;
}
