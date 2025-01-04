import { CommonModule } from '@angular/common';
import { Component,model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles-filter',
  imports: [CommonModule,FormsModule],
  templateUrl: './vehicles-filter.component.html',
  styleUrl: './vehicles-filter.component.css'
})
export class VehiclesFilterComponent {
  filtertext = model.required({
    alias :'filterCriteria'
  });
}
