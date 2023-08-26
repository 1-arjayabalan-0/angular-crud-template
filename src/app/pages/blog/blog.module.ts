import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogListingComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
