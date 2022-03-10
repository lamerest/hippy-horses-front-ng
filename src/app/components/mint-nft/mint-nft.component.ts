import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.scss'],
})
export class MintNftComponent {
  @Input() text: any;
}
