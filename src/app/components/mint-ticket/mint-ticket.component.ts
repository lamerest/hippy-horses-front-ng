import { Component, Input, OnChanges } from '@angular/core';
import { Languages, translations } from 'src/app/i18n/translations';
import SwiperCore, { SwiperOptions, Virtual } from 'swiper';

SwiperCore.use([Virtual]);
@Component({
  selector: 'app-mint-ticket',
  templateUrl: './mint-ticket.component.html',
  styleUrls: ['./mint-ticket.component.scss'],
})
export class MintTicketComponent implements OnChanges {
  @Input() lang: Languages = Languages.EN;

  config: SwiperOptions = {
    navigation: true,
    slidesPerView: 1,
    spaceBetween: 64,
    initialSlide: 1,
  };

  activeTicket = {
    name: '',
    color: '#B6531C',
    type: 'golden',
    cost: 0.02,
    minted: 321,
    supply: 1000,
    description: 'Give you acces to mint 1 uncommon NFT.',
  };

  mintTicketsText = translations[Languages.EN].mintTicket;

  ngOnChanges() {
    this.mintTicketsText = translations[Languages.EN].mintTicket;
  }

  sliderIndexChanged(sliderInstance: any) {
    const slideIndex = sliderInstance[0].activeIndex;
    console.log(slideIndex);
    setTimeout(() => {
      this.activeTicket.type = this.mintTicketsText.tickets[slideIndex].type;
    }, 0);
  }

  getGradient(color: string) {
    return `{ background: ${color},
background: -webkit-repeating-linear-gradient(to left, ${color} 0%, #FFFFFF 30%, ${color} 49%, #FFFFFF 78%, ${color} 100%),
background: -moz-repeating-linear-gradient(to left, ${color} 0%, #FFFFFF 30%, ${color} 49%, #FFFFFF 78%, ${color} 100%),
background: repeating-linear-gradient(to left, ${color} 0%, #FFFFFF 30%, ${color} 49%, #FFFFFF 78%, ${color} 100%),
-webkit-background-clip: text,
-webkit-text-fill-color: transparent }`;
  }
}
