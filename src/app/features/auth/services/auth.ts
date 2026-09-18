import { Injectable, signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'cliente' | 'empleado' | 'admin';
  visits?: number;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<User | null>({
    id: '4',
    name: 'Pria Torres',
    email: 'priat@gmail.com',
    role: 'cliente',
    visits: 5,
    phone: '987644321'
  });

  login(email: string, pass: string): boolean {
    if (email.toLowerCase().includes('jack') || email.toLowerCase().includes('admin')) {
      this.currentUser.set({ id: '1', name: 'Jack (Admin)', email, role: 'admin', visits: 35 });
      return true;
    }
    if (email.toLowerCase().includes('nelly') || email.toLowerCase().includes('emp')) {
      this.currentUser.set({ id: '2', name: 'Nelly (Barista)', email, role: 'empleado', visits: 20 });
      return true;
    }
    this.currentUser.set({
      id: '4',
      name: 'Pria Torres',
      email: email || 'priat@gmail.com',
      role: 'cliente',
      visits: 5,
      phone: '987644321'
    });
    return true;
  }

  logout() {
    this.currentUser.set(null);
  }
}
