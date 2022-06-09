import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// RxJS 임포트
import { Observable, of, throwError } from 'rxjs';
//FileUpload API
import { FileuploadService } from '../service/fileupload.service';
import { catchError, filter, map, mergeMap, tap, timeout } from 'rxjs/operators';


interface File{
  id:number,
  formdata:FormData,
  type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress,
  loaded: number,
  total?: number,
  progressBar:number,
}
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
  public loaded:number = 0;
  public total: number= 0;
  public list: Array<any> =[];

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

  pushArray(){
    if(this.list.length > 0){
      const maxIdx = Math.max(...this.list.map(item => item.id));
      const item = {
        id:maxIdx+1,
        formdata: this.formData,
        progressBar:0,
        loaded:0,
        total:0
      }

      this.list.push(item);
    }
    else{
      const item = {
        id:1,
        formdata: this.formData,
        progressBar:0,
        loaded:0,
        total:0
     }
     this.list.push(item);
    }


    console.log(this.list);
    
  }

  submit(){

    of(...this.list)
      .pipe(
        tap((item) => console.log('item : ',item)),
        mergeMap(item =>
          this.fileuploadService.fileUplaod(item.formdata).pipe(
            filter(value => value.type === 1),
            map(value => Object.assign(item,value )),
          )
        )
      )
      .subscribe(
        (event: File)=>{
        console.log(event);
        
        if(event.type === 1){
            console.log('val : ' , event);
            const progress = Math.round(event.loaded / event.total * 100);
            event.progressBar = Math.round(event.loaded / event.total * 100);
            this.progressBar = progress;
            this.loaded = event.loaded;
            this.total = event.total;
          }
        },
        err =>{
          console.error('err : ',err);      
        }
      )
  }

  onFileSelected($event:any){
    console.log($event);
    const file:any = $event.target.files[0];
    console.log(file);
    this.formData.append('file',file);
  }

}
