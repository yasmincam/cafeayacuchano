import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { CartDrawerComponent } from '../../../features/cart/components/cart-drawer/cart-drawer';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartDrawerComponent
  ],
  templateUrl: './client-layout.html',
  styleUrl: './client-layout.css'
})
export class ClientLayout {}
