import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './landing/shared/not-found/not-found.component';
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
  {
    path: 'contents',
    loadChildren: () =>
      import('./content/content.module').then((m) => m.ContentModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
