import { AfterViewInit, Component } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AtroposComponent } from '../atropos/atropos.component';
import 'atropos/css'
import Atropos from 'atropos';
@Component({
  selector: 'app-carrousel-img',
  standalone: true,
  imports: [MdbCarouselModule,AtroposComponent],
  templateUrl: './carrousel-img.component.html',
  styleUrls: ['./carrousel-img.component.css']
})
export class CarrouselImgComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 200,
      shadowScale: 0.00,
      onEnter() {
        console.log('Enter');
      },
      onLeave() {
        console.log('Leave');
      },
      onRotate(x, y) {
        console.log('Rotate', 100, 100);
      }
    });
  }
}
