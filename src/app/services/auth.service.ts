import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  authenticate(username: string, password: string): Observable<boolean> {
    const isAuthenticated = username === 'admin' && password === 'admin';
    this.isLoggedIn = isAuthenticated;
    return of(isAuthenticated).pipe(delay(1000)); 
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): boolean {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }

}
