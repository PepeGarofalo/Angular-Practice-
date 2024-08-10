import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import 'animate.css';

@Component({
  selector: 'app-atropos',
  standalone: true,
  imports: [MdbCarouselModule],
  templateUrl: './atropos.component.html',
  styleUrls: ['./atropos.component.css']
})
export class AtroposComponent implements AfterViewInit {
  @ViewChild('animateHeader', { static: false }) animateHeader!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateHeader.nativeElement.classList.add('animate__fadeInDown');
          observer.unobserve(this.animateHeader.nativeElement);
        }
      });
    }, options);

    observer.observe(this.animateHeader.nativeElement);
  }
}
