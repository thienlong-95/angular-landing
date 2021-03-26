import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  slides = [
    {
      title: 'We create an alround experience for your Corporate business',
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et
  magnis.`,
    },
    {
      title: 'We create an alround experience for your Corporate business',
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et
  magnis.`,
    },
    {
      title: 'We create an alround experience for your Corporate business',
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et
  magnis.`,
    },
    {
      title: 'We create an alround experience for your Corporate business',
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis penatibus et
  magnis.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
