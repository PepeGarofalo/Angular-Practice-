import { Component } from '@angular/core';
import { AtroposComponent } from '../../shared/atropos/atropos.component';
import { NavComponent } from '../../shared/nav/nav.component';
import { CarrouselImgComponent } from '../../shared/carrousel-img/carrousel-img.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgbdCarouselNavigation } from '../../shared/information/information.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AtroposComponent,NavComponent,CarrouselImgComponent,FooterComponent,RouterOutlet,NgbdCarouselNavigation],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
