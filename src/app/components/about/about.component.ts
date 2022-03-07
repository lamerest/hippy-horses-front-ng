import { Component, OnInit } from '@angular/core';
import { translations } from 'src/app/i18n/translations';
import { LangService } from 'src/app/services/lang.service';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  slides = translations[this.langService.activeLang].about;

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    loop: true,
  };

  constructor(private readonly langService: LangService) {}

  ngOnInit(): void {}
}
