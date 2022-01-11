import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private isStop: boolean = false;
  private timer: any;
  constructor() { }

  timerStartCounter() : Observable<number>{
    return timer(0, 1000)
  }

  timerStopCounter(timerObject: any) {
    timerObject.unsubscribe();
  }
}
