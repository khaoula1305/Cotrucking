import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Example implementation
  isAuthenticated(): boolean {
    // Check authentication logic (e.g., check if token exists)
    return !!localStorage.getItem('authToken');
  }
}
