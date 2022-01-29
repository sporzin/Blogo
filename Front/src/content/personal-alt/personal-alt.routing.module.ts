import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAltComponent } from './personal-alt.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalAltComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalAltRoutingModule {}
