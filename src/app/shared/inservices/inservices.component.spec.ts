import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InservicesComponent } from './inservices.component';

describe('InservicesComponent', () => {
  let component: InservicesComponent;
  let fixture: ComponentFixture<InservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
