import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/public/home',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
