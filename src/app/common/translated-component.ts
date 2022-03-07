import { Languages } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';

export class TranslatedComponent {
  text: any;

  langService: LangService;
  getText: (lang: Languages) => any;

  constructor(langService: LangService, getText: (lang: Languages) => any) {
    this.langService = langService;
    this.getText = getText;
    this.text = getText(langService.activeLang);

    this.langService.langChanged.subscribe((lang: Languages) =>
      this.getText(lang)
    );
  }
}
