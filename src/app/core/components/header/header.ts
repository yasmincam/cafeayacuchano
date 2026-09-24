import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { AuthService } from '../../../features/auth/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  cart = inject(CartService);
  auth = inject(AuthService);
  menuOpen = signal<boolean>(false);

  openCart() {
    this.cart.toggleCart(true);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
