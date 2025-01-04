
import { computed, Injectable, signal } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { CartItem } from '../models/cart';
import { match } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  public cartItems = signal<CartItem[]>([]);

  subtotal  = computed(() => this.cartItems().reduce((acc,item)=>
    acc + (item.quantity * item.vehicle.price),0));

  deleveryFree = computed(() => this.subtotal() < 10000 ?999 : 0);

  tax = computed(() => Math.round(this.subtotal() *10.75)/100);

  totalPrice =computed(() => this.subtotal() + this.deleveryFree() +this.tax());

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

  removeCart(cartItem :CartItem){
  this.cartItems.update(items=> items.filter(item=> item.vehicle.id !==cartItem.vehicle.id) )
  }

  updateCart(cartItem :CartItem){
    var findVehicle = this.cartItems().find(cartItem =>cartItem?.vehicle?.id == cartItem.vehicle.id);

    if(findVehicle){
     this.cartItems.update((cartItems) => {
       return cartItems.map((item) =>
         item.vehicle.id === cartItem.vehicle.id ? { ...item, quantity: cartItem.quantity } : item
       );
     });
    }
  }
}
