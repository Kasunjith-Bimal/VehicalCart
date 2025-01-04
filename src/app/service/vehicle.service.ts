import { Injectable, signal } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public vehicles = signal<Vehicle[]>([]);
  public selectedVehicle = signal<Vehicle | undefined>(undefined);

  constructor(private http: HttpClient) {}

  private jsonUrl = 'assets/vehicles.json';

  loadVehicles(): void {
    this.http.get<Vehicle[]>(this.jsonUrl).subscribe({
      next: (vehicles) => {
        this.vehicles.set(vehicles);
        //this.setSelectedVehicale(vehicles[0])
      },
      error: (err) => console.error('Failed to load vehicles:', err),
    });
  }

  // getVehicles(): Vehicle[] {
  //   return this.vehicles();
  // }

  setSelectedVehicale(vehicle : Vehicle){
    this.selectedVehicle.set(vehicle);
  }

}
