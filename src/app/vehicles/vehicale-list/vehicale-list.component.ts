import { VehicleService } from './../../service/vehicle.service';
import { CommonModule } from '@angular/common';
import { Component, computed, Input, OnInit, signal ,input} from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-vehicale-list',
  imports: [CommonModule],
  templateUrl: './vehicale-list.component.html',
  styleUrl: './vehicale-list.component.css'
})
export class VehicaleListComponent implements OnInit{

  filtertext = input('',{
    // transform:(value:string) => value.toLocaleLowerCase(),
    alias : 'listCriteria'
  });

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


  filterVehicals  =computed(() =>  this.vehicles().filter(v=> v.model?.includes(this.filtertext())));

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
