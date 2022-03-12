import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() text: any;

  navigateToBlock(blockName: string) {
    switch (blockName) {
      case 'О нас':
        blockName = 'About';
        break;
      case 'Дорожная карта':
        blockName = 'Roadmap';
        break;
      case 'Чеканка':
        blockName = 'Mint';
        break;
      case 'Команда':
        blockName = 'Team';
        break;
      case 'Амбассадоры':
        blockName = 'Ambassadors';
        break;
    }

    const el = document.getElementById(blockName.toLowerCase());
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
