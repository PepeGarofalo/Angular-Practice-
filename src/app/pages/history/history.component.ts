import { Component } from '@angular/core';
import { TimelineComponent } from '../../shared/timeline/timeline.component';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}
