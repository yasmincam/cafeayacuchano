import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LoyaltyTier {
  level: number;
  name: string;
  visits: string;
  discount: string;
  badgeColor: string;
}

@Component({
  selector: 'app-club-socios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-socios.html',
  styleUrl: './club-socios.css'
})
export class ClubSociosComponent {
  tiers: LoyaltyTier[] = [
    { level: 1, name: 'Socio Bronce', visits: '3+ visitas', discount: '2% OFF', badgeColor: '#CD7F32' },
    { level: 2, name: 'Socio Plata', visits: '11+ visitas', discount: '5% OFF', badgeColor: '#C0C0C0' },
    { level: 3, name: 'Socio Oro', visits: '23+ visitas', discount: '7% OFF', badgeColor: '#FFD700' },
    { level: 4, name: 'Socio Platino', visits: '43+ visitas', discount: '10% OFF', badgeColor: '#00F0FF' },
    { level: 5, name: 'VIP Oasis Master', visits: '68+ visitas', discount: '15% OFF', badgeColor: '#FF007F' }
  ];
}
