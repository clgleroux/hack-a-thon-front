import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  getAll(): any {
    this.http.get<any>(`${this.backendUrl}/stories`);
  }
  findOne(): any {
    this.http.get<any>(`${this.backendUrl}/story`);
  }

  create(story: any): any {
    this.http.post<any>(`${this.backendUrl}/story`, story);
  }
  update(story: any): any {
    this.http.put<any>(`${this.backendUrl}/story`, story);
  }
}
