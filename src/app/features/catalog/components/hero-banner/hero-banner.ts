import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBannerComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
