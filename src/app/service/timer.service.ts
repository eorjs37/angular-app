import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private $pause = new Subject();

  constructor() { 
  }



  timerStartCounter() : Observable<number>{
    return timer(0, 1000).pipe(
      takeUntil(this.$pause)
    )
  }

  timerStopCounter() {
    this.$pause.next();
  }
}
