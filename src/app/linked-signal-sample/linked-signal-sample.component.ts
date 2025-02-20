import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../service/vehicle.service';
import { sign } from 'crypto';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal-sample',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './linked-signal-sample.component.html',
  styleUrl: './linked-signal-sample.component.css'
})
export class LinkedSignalSampleComponent {
  /**
   *
   */
  constructor(private vehicleService : VehicleService) {
  }
  selectedVehicle = signal<Vehicle | undefined>(undefined);
  vehicles = computed(() => this.vehicleService.vehiclesList.value());
  total = signal(0);
  color = signal('blue');

  quantity =  linkedSignal({
    source: this.selectedVehicle,
    computation: () => 1
  });

  totEff = effect(()=>{
    this.total.set((this.selectedVehicle()?.price??0)* this.quantity())
  })

  onSelectedVehicle(ele : EventTarget |null){
    const id = Number((ele as HTMLSelectElement).value);
    // Find the vehicle in the array
    const foundVehicle = (this.vehicles()??[]).find((v) => v.id === id);

    // Set it as the selected vehicle
    if (foundVehicle) {
      this.selectedVehicle.set(foundVehicle);
    }  }

}
