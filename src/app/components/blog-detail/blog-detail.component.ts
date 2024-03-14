import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BlogService } from '../../core/services/blog.service';
import { EMPTY, catchError } from 'rxjs';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, BlogEditComponent, AsyncPipe, ErrorMessageComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  blogs!: BlogRaw[];
  @Input() blogDetail!: BlogRaw;

  public errorMessage!: string;
  public updateFormDisabled = true;

  constructor(private blogService: BlogService) {}

  toggleForm() {
    this.updateFormDisabled = !this.updateFormDisabled;
  }

  public removeBlog() {
    const blogId = this.blogDetail.id;
    if (blogId) {
      this.blogService.removeBlog(blogId).subscribe(() => {
        this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
      });
    }
  }
}
