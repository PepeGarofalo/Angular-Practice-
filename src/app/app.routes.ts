import { Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
