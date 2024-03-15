import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogRaw } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.css',
})
export class BlogCreateComponent {
  @Input() updateList!: () => void;

  private fb = inject(FormBuilder);

  form = this.fb.group({
    newTitle: ['', [Validators.required, Validators.minLength(4)]],
    newAuthor: ['', [Validators.required, Validators.minLength(3)]],
    newContent: ['', [Validators.required, Validators.minLength(4)]],
  });

  private blogService = inject(BlogService);

  public AddNewBlog() {
    const newBlog = {
      id: Math.random(),
      title: this.form.value.newTitle!,
      author: this.form.value.newAuthor!,
      content: this.form.value.newContent!,
      date: new Date(),
    };
    this.form.markAsTouched();
    this.blogService.addNewBlog(newBlog).subscribe(() => {
      this.updateList();
    });
  }
}
