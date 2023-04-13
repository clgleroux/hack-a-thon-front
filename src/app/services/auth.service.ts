import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  backendUrl: string;

  currentUser: any | undefined;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  login(form: any): any {
    return this.http.post<any>(`${this.backendUrl}/auth`, form);
  }

  isLoggedIn(): boolean {
    if (this.currentUser === undefined) {
      return false;
    }
    return true;
  }
}
