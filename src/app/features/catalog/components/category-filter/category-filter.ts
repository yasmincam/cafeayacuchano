import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css'
})
export class CategoryFilterComponent {
  productService = inject(ProductService);

  get categories(): ProductCategory[] {
    return this.productService.categories;
  }

  get active(): ProductCategory {
    return this.productService.selectedCategory();
  }

  select(category: ProductCategory) {
    this.productService.setCategory(category);
  }
}
