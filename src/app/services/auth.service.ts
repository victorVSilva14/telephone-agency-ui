import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(username: string, password: string): Observable<boolean> {
    const isAuthenticated = username === 'admin' && password === 'admin';
    return of(isAuthenticated).pipe(delay(1000)); 
  }
}
