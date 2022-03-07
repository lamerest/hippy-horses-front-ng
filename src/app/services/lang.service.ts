import { EventEmitter, Injectable } from '@angular/core';
import { Languages } from '../i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  _activeLang: Languages = Languages.EN;

  langChanged = new EventEmitter<Languages>();

  set activeLang(lang: Languages) {
    this._activeLang = lang;
    this.langChanged.emit(lang);
  }

  get activeLang() {
    return this._activeLang;
  }
}
