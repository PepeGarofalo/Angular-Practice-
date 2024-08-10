import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MdbCollapseModule,RouterModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {}
