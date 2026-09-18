import { Routes } from '@angular/router';
import { ClientLayout } from './core/layouts/client-layout/client-layout';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/catalog/pages/catalog-page/catalog-page').then(m => m.CatalogPage)
      },
      {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login-page/login-page').then(m => m.LoginPage)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
