import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicaleListComponent } from './../vehicale-list/vehicale-list.component';
import { Component } from '@angular/core';
import { VehicaleDetailComponent } from '../vehicale-detail/vehicale-detail.component';

@Component({
  selector: 'app-vehicale-shell',
  imports: [VehicaleListComponent,VehicaleDetailComponent,FormsModule],
  templateUrl: './vehicale-shell.component.html',
  styleUrl: './vehicale-shell.component.css'
})
export class VehicaleShellComponent {
  filtertext :string = '';
}
