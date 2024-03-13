import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogRaw } from '../../models/blog.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private httpClient: HttpClient) {}

  public getAllBlogs(): Observable<BlogRaw[]> {
    return this.httpClient.get<BlogRaw[]>(`${environment.baseUrl}`);
  }
}
