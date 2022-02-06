import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAltComponent } from './single-alt.component';

const routes: Routes = [
  {
    path: '',
    component: SingleAltComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleAltRoutingModule {}
