import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// RxJS 임포트
import { Observable, of, throwError } from 'rxjs';
//FileUpload API
import { FileuploadService } from '../service/fileupload.service';
import { catchError, tap, timeout } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  public id:String;
  public file:any;
  public formData:FormData = new FormData();
  public SERVER_URL = environment.apiUrl;
  public progressBar:number=0;

  constructor(private http: HttpClient, private fileuploadService:FileuploadService) { 
    
  }

  ngOnInit() {
    this.makeObserable();

    this.http.get(this.SERVER_URL+'/coffees/all').subscribe(
      (res) => {
        console.log(res);
        
      }
    )
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

  submit(){
    this.fileuploadService.fileUplaod(this.formData)
      .pipe(
        timeout(30000),
        tap(val =>{
          console.log('val : ', val);
        }),
        catchError((error:any) => {
          return throwError(error);
        })
      ).subscribe(
        (val:any) =>{
          console.log('val : ', val);
          if(val.type === 1){
            const progress = Math.round(val.loaded / val.total * 100);
            this.progressBar = progress;
          }
        },
        err =>{
          console.error('err : ',err);
          
        }
      )
      // .subscribe((event: HttpEvent<any>)=>{
      //   switch(event.type){
      //     case HttpEventType.UploadProgress:
      //       const progress = Math.round(event.loaded / event.total * 100);
      //       this.progressBar = progress;
      //       break;
      //   }
      // },
      // error => console.error('error : ',error)
      // )
  }

  onFileSelected($event:any){
    console.log($event);
    const file:File = $event.target.files[0];
    console.log(file);
    this.formData.append('file',file);
  }

}
