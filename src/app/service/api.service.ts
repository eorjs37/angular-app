import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Coffee } from '../models/coffee';
import { Desert } from '../models/desert';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private coffeesUrl = 'api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  
  getCoffeeList(): Observable<Coffee[]>{
    return this.http.get<Coffee[]>(`${this.coffeesUrl}/coffees`)
      .pipe(
        catchError(this.handleError)
      );
  } 

  
  getDesert(): Observable<Desert[]>{
    return this.http.get<Desert[]>(`${this.coffeesUrl}/desert`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private log() {
    console.log();
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // 클라이언트나 네트워크 문제로 발생한 에러.
      console.error('An error occurred:', error.error.message);
    }
    else {
      // 백엔드에서 실패한 것으로 보낸 에러.
      // 요청으로 받은 에러 객체를 확인하면 원인을 확인할 수 있습니다.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
