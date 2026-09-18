import { Component, inject } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  private auth = inject(AuthService);
  private router = inject(Router);

  handleLogin(credentials: { email: string; pass: string }) {
    const success = this.auth.login(credentials.email, credentials.pass);
    if (success) {
      this.router.navigate(['/']);
    }
  }
}
