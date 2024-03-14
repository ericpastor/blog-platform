import { Component, Input } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { BlogRaw } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, BlogDetailComponent],
  templateUrl: './blog-edit.component.html',
  styleUrl: './blog-edit.component.css',
})
export class BlogEditComponent {
  @Input() id!: number;

  public updatedTitle: string = '';
  public updatedAuthor: string = '';
  public updatedContent: string = '';

  constructor(private blogService: BlogService) {}

  public UpdateBlog(id: number) {
    const updatedBlog = {
      id: id,
      title: this.updatedTitle,
      author: this.updatedAuthor,
      content: this.updatedContent,
      date: new Date(),
    };
    this.blogService.updateBlog(id, updatedBlog).subscribe();
  }
}
