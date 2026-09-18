import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../components/product-card/product-card';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner';
import { CategoryFilterComponent } from '../../components/category-filter/category-filter';
import { OasisShowcaseComponent } from '../../components/oasis-showcase/oasis-showcase';
import { ScrollRevealDirective } from '../../../../core/directives/scroll-reveal.directive';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroBannerComponent,
    CategoryFilterComponent,
    ProductCard,
    OasisShowcaseComponent,
    ScrollRevealDirective
  ],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  productService = inject(ProductService);
  searchQuery = signal<string>('');

  displayedProducts = computed(() => {
    let list = this.productService.filteredProducts();
    const query = this.searchQuery().trim().toLowerCase();
    if (query) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(query) ||
        (p.notes && p.notes.toLowerCase().includes(query)) ||
        p.description.toLowerCase().includes(query)
      );
    }
    return list;
  });
}
