import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  slides = [
    { slide: '../../../../assets/images/body/partner/partner1.png' },
    { slide: '../../../../assets/images/body/partner/partner2.png' },
    { slide: '../../../../assets/images/body/partner/partner3.png' },
    { slide: '../../../../assets/images/body/partner/partner4.png' },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
