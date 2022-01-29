import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimalComponent } from './minimal.component';

const routes: Routes = [
  {
    path: '',
    component: MinimalComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinimalRoutingModule {}
