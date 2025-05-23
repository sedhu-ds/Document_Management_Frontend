import { Component } from '@angular/core';
import { AuthService } from '../../api/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  role: string = 'viewer'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register({ username: this.username, password: this.password, role: this.role }).subscribe({
      next: () => {
        console.log('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (error) => console.error('Registration failed', error)
    });
  }
}