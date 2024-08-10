import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-inservices',
  standalone: true,
  imports: [],
  templateUrl: './inservices.component.html',
  styleUrls: ['./inservices.component.css']
})
export class InServicesComponent implements AfterViewInit {
  @ViewChildren('animatePageLeft') animatePagesLeft!: QueryList<ElementRef>;
  @ViewChildren('animatePageRight') animatePagesRight!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.remove('animate__fadeOut'); // Elimina la clase de animación inicial
          element.classList.add('animate__fadeInLeft'); // Agrega la clase de animación para entrar desde la izquierda
          observerLeft.unobserve(element); // Deja de observar una vez que se activa la animación
        }
      });
    }, options);

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.remove('animate__fadeOut'); // Elimina la clase de animación inicial
          element.classList.add('animate__fadeInRight'); // Agrega la clase de animación para entrar desde la derecha
          observerRight.unobserve(element); // Deja de observar una vez que se activa la animación
        }
      });
    }, options);

    this.animatePagesLeft.forEach(page => {
      observerLeft.observe(page.nativeElement);
    });

    this.animatePagesRight.forEach(page => {
      observerRight.observe(page.nativeElement);
    });
  }
}
