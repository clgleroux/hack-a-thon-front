import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, CreateBook, UpdateBook } from '../interface/book.dto';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  getAll(userId: any): any {
    return this.http.get<any>(`${this.backendUrl}/api/books/user/${userId}`);
  }

  findOne(id: any): Observable<Book> {
    return this.http.get<any>(`${this.backendUrl}/api/books/${id}`);
  }

  create(userId: any, story: CreateBook): any {
    return this.http.post<any>(
      `${this.backendUrl}/api/books/user/${userId}`,
      story
    );
  }
  update(idBook: any, story: UpdateBook): any {
    return this.http.post<any>(
      `${this.backendUrl}/api/books/chapters/${idBook}`,
      story
    );
  }
}
