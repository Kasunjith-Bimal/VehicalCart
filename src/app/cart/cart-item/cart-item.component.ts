
import { CartService } from './../../service/cart.service';
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Vehicle } from '../../models/vehicle';
@Component({
  selector: 'app-cart-item',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

constructor(public cartService :CartService) {}

onQuantityChange(cartItem:CartItem) {
  this.cartService.updateCart(cartItem);
}

removeItem(cartItem:CartItem) {
 this.cartService.removeCart(cartItem);
}

  @Input() cartItem : CartItem | undefined
}
