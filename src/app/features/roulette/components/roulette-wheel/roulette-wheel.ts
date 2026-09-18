import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../core/services/cart';

interface RoulettePrize {
  title: string;
  discount: number;
  code: string;
  color: string;
}

@Component({
  selector: 'app-roulette-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roulette-wheel.html',
  styleUrl: './roulette-wheel.css'
})
export class RouletteWheelComponent {
  cart = inject(CartService);

  isSpinning = signal<boolean>(false);
  rotationDegrees = signal<number>(0);
  wonPrize = signal<RoulettePrize | null>(null);
  hasSpunToday = signal<boolean>(false);

  prizes: RoulettePrize[] = [
    { title: '25% EN CAFÉ VRAEM', discount: 25, code: 'MOKA-25', color: '#165B37' },
    { title: '15% EN BARRA', discount: 15, code: 'RUL-15', color: '#E5A93C' },
    { title: '5% DESCUENTO', discount: 5, code: 'RUL-5', color: '#00FF88' },
    { title: '20% ANIVERSARIO', discount: 20, code: 'ANIVERSARIO1', color: '#2A9D8F' },
    { title: '7% RECOJO', discount: 7, code: 'RUL-7', color: '#FF9E00' },
    { title: '10% EN FILTRADOS', discount: 10, code: 'OASIS10', color: '#D4A373' }
  ];

  mathCos(degrees: number): number {
    return Math.cos((degrees * Math.PI) / 180);
  }

  mathSin(degrees: number): number {
    return Math.sin((degrees * Math.PI) / 180);
  }

  spin() {
    if (this.isSpinning() || this.hasSpunToday()) return;

    this.isSpinning.set(true);
    this.wonPrize.set(null);

    const prizeIndex = Math.floor(Math.random() * this.prizes.length);
    const selectedPrize = this.prizes[prizeIndex];
    const segmentAngle = 360 / this.prizes.length;
    const targetDeg = 360 * 5 + (this.prizes.length - prizeIndex - 0.5) * segmentAngle;

    this.rotationDegrees.set(targetDeg);

    setTimeout(() => {
      this.isSpinning.set(false);
      this.hasSpunToday.set(true);
      this.wonPrize.set(selectedPrize);
      this.cart.applyCoupon(selectedPrize.code, selectedPrize.discount);
    }, 4000);
  }
}
