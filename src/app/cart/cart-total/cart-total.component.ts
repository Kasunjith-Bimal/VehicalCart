import { CartService } from './../../service/cart.service';
import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  imports: [CommonModule],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.css'
})
export class CartTotalComponent {
  constructor(public cartService : CartService) {
  }

  cartItems =  computed(() => {
    return this.cartService.cartItems();
  });

  subTotal =  computed(() => {
    return this.cartService.subtotal();
  });

  deliveryFee =  computed(() => {
    return this.cartService.deleveryFree();
  });

  tax =  computed(() => {
    return this.cartService.tax();
  });

  totalPrice =  computed(() => {
    return this.cartService.totalPrice();
  });
}
