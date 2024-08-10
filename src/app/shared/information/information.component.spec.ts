import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbdCarouselNavigation } from './information.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

describe('NgbdCarouselNavigation', () => {
  let component: NgbdCarouselNavigation;
  let fixture: ComponentFixture<NgbdCarouselNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgbdCarouselNavigation],
      imports: [NgbCarouselModule] // Asegúrate de importar el módulo necesario
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbdCarouselNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
