import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAltComponent } from './single-alt/single-alt.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    children: [
      {
        path: 'single',
        component: SingleComponent,
      },
      {
        path: 'single-alt',
        component: SingleAltComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
