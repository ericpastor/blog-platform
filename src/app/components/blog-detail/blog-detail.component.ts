import { Component, Input } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  @Input() blogDetail!: BlogRaw;

  constructor(private blogService: BlogService) {}

  public removeBlog() {
    const blogToRemove = this.blogDetail.id;
    this.blogService.removeBlog(blogToRemove).subscribe();
  }
}
