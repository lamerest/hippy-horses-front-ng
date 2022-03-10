import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() slides: any[];

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    loop: true,
  };
}
