import { Component, OnInit } from '@angular/core';
import { postsBaseUrl } from 'src/dashboard/dashbooardConsts';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
})
export class BlogSingleComponent implements OnInit {
  dashboardBaseUrl: string = postsBaseUrl;
  post_header: string = '';
  post_author_img = postsBaseUrl;
  publish_date: Date;
  paragraphs: any[] = [];
  articles: any[] = [];
  imageList: [
    {
      url: string;
      caption: string;
    }
  ] = null;
  comments: any;
  constructor() {}

  ngOnInit(): void {}
}
