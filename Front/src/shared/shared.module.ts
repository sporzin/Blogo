import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [ReactiveFormsModule, FormsModule, HttpClientModule],
})
export class SharedModule {}
