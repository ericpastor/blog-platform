import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogRaw } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.css',
})
export class BlogCreateComponent {
  @Input() updateList!: () => void;

  public newTitle: string = '';
  public newAuthor: string = '';
  public newContent: string = '';

  constructor(private blogService: BlogService) {}

  public AddNewBlog() {
    const newBlog = {
      id: Math.random(),
      title: this.newTitle,
      author: this.newAuthor,
      content: this.newContent,
      date: new Date(),
    };
    this.blogService.addNewBlog(newBlog).subscribe(() => {
      this.updateList();
    });
  }
}
