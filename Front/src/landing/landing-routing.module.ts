import { NgModule } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Route,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'about-me',
        component: AboutComponent,
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {
  constructor(router: Router, spinnerService: NgxSpinnerService) {
    const spinnerConfig: Spinner = {
      showSpinner: true,
      bdColor: 'red',
      color: 'green',
      fullScreen: true,
      size: 'medium',
      type: 'ball-fall',
      zIndex: 999,
    };
    router.events.subscribe((e: Event) => {
      if (e instanceof NavigationStart) {
        spinnerService.show();
      }
      if (e instanceof NavigationEnd || NavigationCancel || NavigationError) {
        setTimeout(() => {
          spinnerService.hide();
        }, 1500);
      }
    });
  }
}
