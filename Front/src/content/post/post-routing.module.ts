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
        component: SingleComponent,
        pathMatch: 'full',
      },
      {
        path: 'single-alt',
        component: SingleAltComponent,
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
