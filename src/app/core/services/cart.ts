import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<CartItem[]>([]);
  isOpen = signal<boolean>(false);
  appliedCoupon = signal<{ code: string; discount: number } | null>(null);

  totalCount = computed(() =>
    this.items().reduce((acc, item) => acc + item.quantity, 0)
  );

  subtotal = computed(() =>
    this.items().reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  discountAmount = computed(() => {
    const coupon = this.appliedCoupon();
    if (!coupon) return 0;
    return (this.subtotal() * coupon.discount) / 100;
  });

  total = computed(() =>
    Math.max(0, this.subtotal() - this.discountAmount())
  );

  addItem(product: { id: string; name: string; price: number; image: string }, variant = 'Estándar') {
    const current = this.items();
    const index = current.findIndex(i => i.id === product.id && i.variant === variant);
    if (index > -1) {
      const updated = [...current];
      updated[index].quantity += 1;
      this.items.set(updated);
    } else {
      this.items.set([...current, { ...product, quantity: 1, variant }]);
    }
  }

  removeItem(id: string, variant = 'Estándar') {
    this.items.set(this.items().filter(i => !(i.id === id && i.variant === variant)));
  }

  toggleCart(open?: boolean) {
    this.isOpen.set(open !== undefined ? open : !this.isOpen());
  }

  applyCoupon(code: string, discount: number) {
    this.appliedCoupon.set({ code, discount });
  }

  clear() {
    this.items.set([]);
    this.appliedCoupon.set(null);
  }
}
