import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-lead',
  templateUrl: './social-media-lead.component.html',
  styleUrls: ['./social-media-lead.component.scss'],
})
export class SocialMediaLeadComponent {
  @Input() context: any;
}
