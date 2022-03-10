import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: true,
    pagination: true,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 'auto',
      },
    },
  };

  slides = new Array(7);
}
