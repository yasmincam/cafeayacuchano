import { Injectable, signal, computed } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { INITIAL_PRODUCTS } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>(INITIAL_PRODUCTS);
  selectedCategory = signal<ProductCategory>('Todos');

  categories: ProductCategory[] = [
    'Todos',
    'Café en Grano',
    'Bebidas de Barra',
    'Métodos Filtrados',
    'Repostería'
  ];

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Todos') return this.products();
    return this.products().filter(p => p.category === category);
  });

  setCategory(category: ProductCategory) {
    this.selectedCategory.set(category);
  }

  getProductById(id: string): Product | undefined {
    return this.products().find(p => p.id === id);
  }
}
