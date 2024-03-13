import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [AsyncPipe, BlogDetailComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  public blogsList$!: Observable<BlogRaw[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogsList$ = this.blogService.getAllBlogs();
  }
}
