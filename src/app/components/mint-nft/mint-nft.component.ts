import { Component, OnInit } from '@angular/core';
import Moralis from 'moralis';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.scss'],
})
export class MintNftComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Moralis.start({});
  }
}
