import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'password',
        loadChildren: () =>
          import('./password/password.module').then((m) => m.PasswordModule),
      },
      {
        path: 'email-activation',
        loadChildren: () =>
          import('./email-activation/email-activation.module').then(
            (m) => m.EmailActivationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
