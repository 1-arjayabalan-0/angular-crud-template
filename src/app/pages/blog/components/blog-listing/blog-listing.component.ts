import { Component, OnInit } from "@angular/core";
import { Blog } from "@pages/blog/models";

@Component({
  selector: "app-blog-listing",
  template: `
  <div>
    sds
  </div>
    <div *ngFor="let b of blog">
      <div>
        {{ b.title }}
      </div>
      <div>
        {{ b.description }}
      </div>
    </div>
  `,
  styles: [],
})
export class BlogListingComponent implements OnInit {
  blog: Blog[] = [];

  constructor() {}

  ngOnInit() {}
}
