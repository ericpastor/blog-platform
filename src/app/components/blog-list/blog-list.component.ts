import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { BlogCreateComponent } from '../blog-create/blog-create.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    AsyncPipe,
    BlogDetailComponent,
    ErrorMessageComponent,
    BlogEditComponent,
    BlogCreateComponent,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  @Input() blogDetail!: BlogRaw;

  public blogsList$!: Observable<BlogRaw[]>;
  public getAllBlogs = this.loadALL();
  public updateFormDisabled = true;

  public errorMessage!: string;

  constructor(private blogService: BlogService) {}

  toggleForm() {
    this.updateFormDisabled = !this.updateFormDisabled;
  }

  public callBackFunction = () => {
    this.loadALL();
  };

  public loadALL() {
    this.blogsList$ = this.blogService.getAllBlogs().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

  public removeBlog(id: number) {
    this.blogService.removeBlog(id).subscribe(() => {
      this.loadALL();
    });
  }

  ngOnInit(): void {
    this.loadALL();
  }
}
