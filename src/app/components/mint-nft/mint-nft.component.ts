import { Component, Input, OnChanges } from '@angular/core';
import Moralis from 'moralis';
import { Languages, translations } from 'src/app/i18n/translations';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.scss'],
})
export class MintNftComponent implements OnChanges {
  @Input() lang: Languages = Languages.EN;

  text = translations[this.lang].mintNFT;

  ngOnChanges() {
    this.text = translations[this.lang].mintNFT;
  }
}
