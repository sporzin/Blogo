import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { PostComponent } from './post/post.component';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [
    PostComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
