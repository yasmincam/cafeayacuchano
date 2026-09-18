import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../../../core/services/cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  cart = inject(CartService);

  selectedVariant = signal<string>('Estándar');
  addedNotice = signal<boolean>(false);

  ngOnInit() {
    if (this.product.variants && this.product.variants.length > 0) {
      this.selectedVariant.set(this.product.variants[0]);
    }
  }

  selectVariant(v: string) {
    this.selectedVariant.set(v);
  }

  addToCart() {
    this.cart.addItem({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image
    }, this.selectedVariant());

    this.addedNotice.set(true);
    setTimeout(() => this.addedNotice.set(false), 1500);
  }
}
