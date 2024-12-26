import { CommonModule } from '@angular/common';
import { VehicleService } from './../../service/vehicle.service';
import { Component, computed } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-vehicale-detail',
  imports: [CommonModule],
  templateUrl: './vehicale-detail.component.html',
  styleUrl: './vehicale-detail.component.css'
})
export class VehicaleDetailComponent {

  constructor(public vehicleService : VehicleService,public cartService : CartService) {}

    selectedVehicle = computed(() => {
      try {
        return this.vehicleService.selectedVehicle();
      } catch (e) {
        return undefined;
      }
    });

    addToCart(vehicle : Vehicle | undefined){
      if(vehicle){
        this.cartService.addToCart(vehicle);
      }
    }
}
