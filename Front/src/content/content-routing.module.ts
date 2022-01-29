import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicComponent } from './classic/classic.component';
import { MinimalComponent } from './minimal/minimal.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: 'classic',
    loadChildren: () =>
      import('./classic/classic.module').then((m) => m.ClassicModule),
  },
  {
    path: 'minimal',
    loadChildren: () =>
      import('./minimal/minimal.module').then((m) => m.MinimalModule),
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./personal/personal.module').then((m) => m.PersonalModule),
  },
  {
    path: 'personal-alt',
    loadChildren: () =>
      import('./personal-alt/personal-alt.module').then(
        (m) => m.PersonalAltModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
