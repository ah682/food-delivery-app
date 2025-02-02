import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-order-now',
  standalone: true,  // ✅ Standalone component
  imports: [CommonModule, RouterModule],
  templateUrl: './order-now.component.html',
})
export class OrderNowComponent implements OnInit {
  cart: CartItem[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.totalPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = '/restaurants';
  }
}
