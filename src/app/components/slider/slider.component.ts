import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: true,
    pagination: true,
    loop: true,
  };

  slides = new Array(7);

  constructor() {}

  ngOnInit(): void {}
}
