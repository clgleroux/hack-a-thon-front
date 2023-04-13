import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  backendUrl: string;

  currentUser: any | undefined = undefined;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  login(form: any): any {
    return new Promise(resolve => {
      this.http.post<any>(`${this.backendUrl}/auth`, form).subscribe({
        next: user => {
          this.currentUser = user;
          resolve(true);
        },
        error: error => {
          resolve(false);
        },
      });
    });
  }

  isLoggedIn(): boolean {
    if (this.currentUser === undefined) {
      return false;
    }
    return true;
  }
}
