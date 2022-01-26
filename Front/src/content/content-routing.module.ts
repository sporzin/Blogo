import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicComponent } from './classic/classic.component';
import { MinimalComponent } from './minimal/minimal.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: 'content',
    children: [
      {
        path: 'classic',
        component: ClassicComponent,
      },
      {
        path: 'minimal',
        component: MinimalComponent,
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'personal-alt',
        component: PersonalComponent,
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./post/post.module').then((m) => m.PostModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
