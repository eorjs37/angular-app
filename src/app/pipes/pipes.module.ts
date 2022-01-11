import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyFormatPipe } from './money-format.pipe';


@NgModule({
  declarations: [MoneyFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [
    MoneyFormatPipe
  ]
})
export class PipesModule { }
