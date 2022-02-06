import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },

      {
        path: 'login',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'password-reset',
        loadChildren: () =>
          import('./password/password.module').then((m) => m.PasswordModule),
      },
      {
        path: 'confirm-email',
        loadChildren: () =>
          import('./email-activation/email-activation.module').then(
            (m) => m.EmailActivationModule
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AccountRoutingModule {}
