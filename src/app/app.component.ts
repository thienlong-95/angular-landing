import { SliderComponent } from './components/header/slider/slider.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-landing';
  ngOnInit() {
    AOS.init();
  }
}
