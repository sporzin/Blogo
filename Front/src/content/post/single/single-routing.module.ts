import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleComponent } from './single.component';

const routes: Routes = [
  {
    path: '',
    component: SingleComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRoutingModule {}
