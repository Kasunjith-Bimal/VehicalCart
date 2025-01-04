import { CartService } from './../../service/cart.service';
import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  imports: [CommonModule,CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {


  constructor(public cartService :CartService) {
  }
cartItems = computed(() => {
  return  this.cartService.cartItems()
});

updateCartItemQuantity($event: Event) {
throw new Error('Method not implemented.');
}
removeFromCart($event: Event) {
throw new Error('Method not implemented.');
}

}
