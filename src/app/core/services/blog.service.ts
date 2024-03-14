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

  public getBlogById(id: number): Observable<BlogRaw> {
    return this.httpClient.get<BlogRaw>(`${environment.baseUrl}/${id}`);
  }

  public addNewBlog(newBlog: BlogRaw): Observable<BlogRaw> {
    return this.httpClient.post<BlogRaw>(`${environment.baseUrl}`, newBlog);
  }

  public updateBlog(id: number, blog: BlogRaw): Observable<BlogRaw> {
    return this.httpClient.patch<BlogRaw>(`${environment.baseUrl}/${id}`, blog);
  }

  public removeBlog(id: number): Observable<BlogRaw> {
    return this.httpClient.delete<BlogRaw>(`${environment.baseUrl}/${id}`);
  }
}
