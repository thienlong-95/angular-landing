import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SliderComponent } from './components/header/slider/slider.component';
import { PartnersComponent } from './components/body/partners/partners.component';
import { ServiceComponent } from './components/body/service/service.component';
import { CareerComponent } from './components/body/career/career.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PartnersComponent,
    ServiceComponent,
    CareerComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
