import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private router = inject(Router);
  isLoading = signal<boolean>(true);
  private navStartTime = 0;

  constructor() {
    // Retardo para la carga inicial al entrar a la página (2 segundos para apreciar el logo y la animación)
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);

    // Navegación entre rutas reales (ej: / hacia /login)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Ignorar si solo es un cambio de ancla/fragmento (#catalogo, #origen)
        const currentPath = this.router.url.split('#')[0].split('?')[0];
        const targetPath = event.url.split('#')[0].split('?')[0];

        if (currentPath !== targetPath) {
          this.navStartTime = Date.now();
          this.isLoading.set(true);
        }
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (this.isLoading()) {
          const elapsed = Date.now() - this.navStartTime;
          const waitTime = Math.max(900 - elapsed, 200);
          setTimeout(() => {
            this.isLoading.set(false);
          }, waitTime);
        }
      }
    });
  }

  show() {
    this.isLoading.set(true);
  }

  hide() {
    this.isLoading.set(false);
  }
}
