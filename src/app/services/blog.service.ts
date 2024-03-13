import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogRaw } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = 'http://localhost:3000/blogs';

  constructor(private httpClient: HttpClient) {}

  public getAllBlogs(): Observable<BlogRaw[]> {
    return this.httpClient.get<BlogRaw[]>(this.baseUrl);
  }
}
