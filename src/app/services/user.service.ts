import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  findOne(id: any): any {
    return this.http.get<any>(`${this.backendUrl}/user/${id}`);
  }

  create(user: any): any {
    return this.http.post<any>(`${this.backendUrl}/user`, user);
  }
}
