import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class LoaderComponent {
  loading = inject(LoadingService);
}
