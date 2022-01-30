import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAltComponent } from './single-alt/single-alt.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: 'single',
        loadChildren: () =>
          import('./single/single.module').then((m) => m.SingleModule),
        pathMatch: 'full',
      },
      {
        path: 'single-alt',
        loadChildren: () =>
          import('./single-alt/single-alt.module').then(
            (m) => m.SingleAltModule
          ),
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
