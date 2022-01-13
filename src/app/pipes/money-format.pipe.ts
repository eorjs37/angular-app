import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: number): unknown {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return value.toString().replace(regexp, ',');
  }

}
