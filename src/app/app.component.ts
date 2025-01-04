import { CartService } from './service/cart.service';

import { VehicleService } from './service/vehicle.service';
import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carSales';
  constructor(public cartService : CartService) {

  }

  cartCount  = computed(() => {
    return this.cartService.cartItems().reduce((total, item) => total + item.quantity, 0);
  });

}
