import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
})
export class SharedModule {}
