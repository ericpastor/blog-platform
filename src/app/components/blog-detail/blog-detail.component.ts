import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { AsyncPipe, CommonModule } from '@angular/common';
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

  toggleForm() {
    this.updateFormDisabled = !this.updateFormDisabled;
  }
}
