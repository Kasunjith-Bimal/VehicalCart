import { Vehicle } from './models/vehicle';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./vehicles/vehicale-shell/vehicale-shell.component').then(c => c.VehicaleShellComponent)
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart-shell/cart-shell.component').then(c => c.CartShellComponent)
  },
  {
    path: 'sample',
    loadComponent: () =>
      import('./sample/sample.component').then(c => c.SampleComponent)
  },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
];
