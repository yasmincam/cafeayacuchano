import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MokaService } from '../../../../core/services/moka';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  moka = inject(MokaService);
  email = 'priat@gmail.com';
  pass = '123456';

  @Output() loginRequest = new EventEmitter<{ email: string; pass: string }>();

  onPasswordFocus(focused: boolean) {
    this.moka.onPasswordFocus(focused);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.loginRequest.emit({ email: this.email, pass: this.pass });
  }
}
