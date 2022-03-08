import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Let`s Study Angular';
  nowdate$: Observable<number>;

  constructor() {
    // this.nowdate$ = interval(1000).pipe(
    //   map(x => x = new Date().getTime())
    // );
  }
}
