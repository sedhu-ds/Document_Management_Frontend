import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DocumentManagementComponent } from './document-management/document-management.component';
import { IngestionManagementComponent } from './ingestion-management/ingestion-management.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'document-management', component: DocumentManagementComponent },
  { path: 'ingestion-management', component: IngestionManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];