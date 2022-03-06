import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { SocialMediaLeadComponent } from './components/social-media-lead/social-media-lead.component';
import { MintTicketComponent } from './components/mint-ticket/mint-ticket.component';
import { MintNftComponent } from './components/mint-nft/mint-nft.component';
import { TeamComponent } from './components/team/team.component';
import { AmbassadorsComponent } from './components/ambassadors/ambassadors.component';
import { FaqComponent } from './components/faq/faq.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HeroComponent, SliderComponent, AboutComponent, RoadmapComponent, SocialMediaLeadComponent, MintTicketComponent, MintNftComponent, TeamComponent, AmbassadorsComponent, FaqComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
