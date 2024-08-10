import { Component } from '@angular/core';
import { InServicesComponent } from '../../shared/inservices/inservices.component';



@Component({
  selector: 'app-services',
  standalone: true,
  imports: [InServicesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
