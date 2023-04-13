import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../interface/book.dto';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  getAll(): any {
    return this.http.get<any>(`${this.backendUrl}/stories`);
  }

  findOne(id: any): Observable<Book> {
    return this.http.get<any>(`${this.backendUrl}/story/${id}`);
  }

  create(story: any): any {
    return this.http.post<any>(`${this.backendUrl}/story`, story);
  }
  update(story: any): any {
    return this.http.put<any>(`${this.backendUrl}/story`, story);
  }
}
