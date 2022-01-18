import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [{ path: 'ID:/posts', component: PostComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
