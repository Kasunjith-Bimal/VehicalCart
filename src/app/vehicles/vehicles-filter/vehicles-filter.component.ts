import { CommonModule } from '@angular/common';
import { Component,effect,model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicles-filter',
  imports: [CommonModule,FormsModule],
  templateUrl: './vehicles-filter.component.html',
  styleUrl: './vehicles-filter.component.css'
})
export class VehiclesFilterComponent {
  // filtertext = model.required({
  //   alias :'filterCriteria'
  // });

  filter = signal('');
  processFilter = output<string>({
    alias:'filterChange'
  });

  filtrtEff = effect(() => this.processFilter.emit(this.filter()))

}
