import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicaleListComponent } from './../vehicale-list/vehicale-list.component';
import { Component, signal } from '@angular/core';
import { VehicaleDetailComponent } from '../vehicale-detail/vehicale-detail.component';
import { VehiclesFilterComponent } from '../vehicles-filter/vehicles-filter.component';

@Component({
  selector: 'app-vehicale-shell',
  imports: [VehicaleListComponent,VehicaleDetailComponent,VehiclesFilterComponent],
  templateUrl: './vehicale-shell.component.html',
  styleUrl: './vehicale-shell.component.css'
})
export class VehicaleShellComponent {
  filtertext = signal('');

}
