import { Injectable, signal } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems = signal<CartItem[]>([]);


  addToCart(vehicle : Vehicle){
   var findVehicle = this.cartItems().find(cartItem =>cartItem?.vehicle?.id == vehicle.id);

   if(findVehicle){
    this.cartItems.update((cartItems) => {
      return cartItems.map((item) =>
        item.vehicle.id === vehicle.id ? { ...item, quantity: item.quantity+ 1 } : item
      );
    });
   }else{
    this.cartItems.update(items => [...items, { vehicle, quantity: 1 }]);
   }
  }
}
