import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: any, password: any): boolean {
    throw new Error('Method not implemented.');
  }
  // Example implementation
  isAuthenticated(): boolean {
    // Check authentication logic (e.g., check if token exists)
    //return !!localStorage.getItem('authToken');
    return true;
  }
}
