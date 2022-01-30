import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentTime'
})
export class CurrentTimePipe implements PipeTransform {

  transform(value: number): string {
    let year,
        mm,
        dd,
        hh,
        min,
        ss;
    
    const date = new Date(value);

    year = date.getFullYear().toString();

    mm = ('0' + (date.getMonth() + 1)).slice(-2);
    dd = ('0' + date.getDate()).slice(-2);         // Add leading 0.

    hh = ('0'+ date.getHours()).slice(-2);;
    min = ('0' + date.getMinutes()).slice(-2);

    ss = ('0' + date.getSeconds()).slice(-2);
    
    return `${year}/${mm}/${dd} ${hh}:${min}:${ss}`;
  }

}
