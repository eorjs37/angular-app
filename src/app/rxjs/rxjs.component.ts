import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {scan} from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  
  constructor() { 
    const observable = fromEvent(document, 'click').pipe(scan(count => count + 1, 0))
    const observer = (count: number) => console.log(`Clicked ${count} times`);
    observable.subscribe(observer);
  }

  ngOnInit(): void {
  }

}
