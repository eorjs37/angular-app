import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyFormatPipe } from './money-format.pipe';
import { CurrentTimePipe } from './current-time.pipe';


@NgModule({
  declarations: [MoneyFormatPipe, CurrentTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    MoneyFormatPipe,
    CurrentTimePipe
  ]
})
export class PipesModule { }
