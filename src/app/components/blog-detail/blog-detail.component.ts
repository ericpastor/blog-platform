import { Component, Input } from '@angular/core';
import { BlogRaw } from '../../models/blog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  @Input() blogDetail!: BlogRaw;
}
