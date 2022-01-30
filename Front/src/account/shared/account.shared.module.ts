import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { GetService } from './services/get.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },
    GetService,
    PostService,
  ],
})
export class AccountSharedModule {}
