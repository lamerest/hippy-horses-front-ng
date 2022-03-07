import { Component, Input, OnChanges } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';

@Component({
  selector: 'app-social-media-lead',
  templateUrl: './social-media-lead.component.html',
  styleUrls: ['./social-media-lead.component.scss'],
})
export class SocialMediaLeadComponent implements OnChanges {
  @Input() lang: Languages = Languages.EN;
  @Input() social: 'telegramLead' | 'discordLead' = 'telegramLead';

  lead = translations[this.lang][this.social];

  ngOnChanges() {
    this.lead = translations[this.lang][this.social];
  }
}
