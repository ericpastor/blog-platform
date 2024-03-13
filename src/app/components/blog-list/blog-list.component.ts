import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [AsyncPipe, BlogDetailComponent, ErrorMessageComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  public blogsList$!: Observable<BlogRaw[]>;
  public errorMessage!: string;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogsList$ = this.blogService.getAllBlogs().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
