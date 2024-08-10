import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarrouselImgComponent } from './shared/carrousel-img/carrousel-img.component';
import { AtroposComponent } from './shared/atropos/atropos.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ServicesComponent } from './pages/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MdbCheckboxModule,
    MdbCarouselModule,
    NavComponent,
    FooterComponent,
    CarrouselImgComponent,
    AtroposComponent,
    HistoryComponent,
    ServicesComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
}

