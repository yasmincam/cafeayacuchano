import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../../core/services/cart';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css'
})
export class CartDrawerComponent {
  cart = inject(CartService);
  couponInput = '';
  couponMessage = signal<string | null>(null);
  selectedDocType: 'boleta' | 'factura' = 'boleta';
  clientPhone = '';
  orderSuccessId = signal<string | null>(null);

  applyCoupon() {
    const code = this.couponInput.trim().toUpperCase();
    const discounts: Record<string, number> = {
      'MOKA-25': 25,
      'RUL-15': 15,
      'ANIVERSARIO1': 20,
      'OASIS10': 10,
      'RUL-7': 7,
      'RUL-5': 5
    };
    if (discounts[code]) {
      this.cart.applyCoupon(code, discounts[code]);
      this.couponMessage.set(`¡Cupón ${code} aplicado (-${discounts[code]}%)!`);
    } else {
      this.couponMessage.set('Código no válido o vencido');
    }
  }

  confirmReservation() {
    if (this.cart.items().length === 0) return;
    const generatedId = 'AYA-' + Math.floor(1000 + Math.random() * 9000);
    this.orderSuccessId.set(generatedId);
    this.cart.clear();
  }

  close() {
    this.orderSuccessId.set(null);
    this.cart.toggleCart(false);
  }
}
