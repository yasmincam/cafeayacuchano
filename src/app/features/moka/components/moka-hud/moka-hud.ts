import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MokaService } from '../../../../core/services/moka';

@Component({
  selector: 'app-moka-hud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moka-hud.html',
  styleUrl: './moka-hud.css'
})
export class MokaHudComponent {
  moka = inject(MokaService);
  isExpanded = true;

  interact() {
    this.moka.interact();
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
