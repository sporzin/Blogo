import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    children: [
      {
        path: 'single',
        loadChildren: () =>
          import('./single/single.module').then((m) => m.SingleModule),
        pathMatch: 'prefix',
      },
      {
        path: 'single-alt',
        loadChildren: () =>
          import('./single-alt/single-alt.module').then(
            (m) => m.SingleAltModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
