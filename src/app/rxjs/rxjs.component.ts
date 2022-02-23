import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS 임포트
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.makeObserable();
  }

  makeObserable() {
    //1.옵저버블이 구독될때 호출 되는 함수
    const subscriber = (observer: any) => {
      try {
        //next 함수를 통해 데이터 방출
        observer.next(1);
        observer.next(2);

        //complete 함수를 호출
        observer.complete();
      } catch (error) {
        observer.error(error);
      }
      finally {
        // 구독 해지될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed!')
      }
    }

    //2.옵져버블 생성
    const observer$ = new Observable(subscriber);


    //3.구독(subscription)
    observer$.subscribe(
      // 옵저버블이 방출한 next 노티피케이션에 반응하는 next 메소드
      value => console.log(value),
      // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드
      error => console.error(error),
      // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드
      () => console.log('Complete')
    )

  }

}
