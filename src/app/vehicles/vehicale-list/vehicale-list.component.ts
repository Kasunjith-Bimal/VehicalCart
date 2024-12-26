import { VehicleService } from './../../service/vehicle.service';
import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-vehicale-list',
  imports: [CommonModule],
  templateUrl: './vehicale-list.component.html',
  styleUrl: './vehicale-list.component.css'
})
export class VehicaleListComponent implements OnInit{

  constructor(public  vehicleService : VehicleService) {

  }
  ngOnInit(): void {
    this.vehicleService.loadVehicles();
  }

  vehicles = computed(() => {
    try {
      return this.vehicleService.vehicles() ?? [];
    } catch (e) {
      return [];
    }
  });

  selectedVehicale = computed(() => {
        try {
          return this.vehicleService.selectedVehicle();
        } catch (e) {
          return undefined;
        }
   });

  selectVehicale(vehicle:Vehicle){
    this.vehicleService.setSelectedVehicale(vehicle);
  }


}
