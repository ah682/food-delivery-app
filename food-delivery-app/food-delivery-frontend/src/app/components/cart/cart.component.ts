import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule for ngModel

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,  // ✅ Standalone component
  imports: [CommonModule, RouterModule, FormsModule],  // ✅ Include FormsModule
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartMap = new Map<number, CartItem>();

    storedCart.forEach((dish: CartItem) => {
      if (cartMap.has(dish.id)) {
        cartMap.get(dish.id)!.quantity += 1;  // ✅ Group items and sum quantities
      } else {
        cartMap.set(dish.id, { ...dish, quantity: 1 });
      }
    });

    this.cart = Array.from(cartMap.values());
  }

  removeFromCart(item: CartItem): void {
    let storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    storedCart = storedCart.filter((dish: CartItem) => dish.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    this.loadCart();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    let storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    storedCart.forEach((dish: CartItem) => {
      if (dish.id === item.id) {
        dish.quantity = quantity;
      }
    });

    localStorage.setItem('cart', JSON.stringify(storedCart));
    this.loadCart();
  }

  proceedToCheckout(): void {
    window.location.href = '/order-now';
  }
}
