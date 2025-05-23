import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  newUsername: string = '';
  newRole: string = '';

  constructor(private userService: UserService, public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/dashboard']);
    }
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (error) => console.error('Error loading users', error)
    });
  }

  addUser(): void {
    this.userService.createUser({ username: this.newUsername, role: this.newRole }).subscribe({
      next: () => {
        this.loadUsers();
        this.newUsername = '';
        this.newRole = '';
      },
      error: (error) => console.error('Error adding user', error)
    });
  }
}
