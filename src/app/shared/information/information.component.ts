import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import 'animate.css';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [NgbCarouselConfig] // Proporciona NgbCarouselConfig al componente
})
export class NgbdCarouselNavigation implements AfterViewInit {
  @ViewChild('animateHeader', { static: false }) animateHeader!: ElementRef;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    'assets/images/int2.jpg',
    'assets/images/interior22.jpg',
    'assets/images/fron.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // Personaliza los valores predeterminados del carrusel
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

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
