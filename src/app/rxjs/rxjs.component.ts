import { Component, OnInit } from '@angular/core';
import { HttpClient,  HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// RxJS 임포트
import { of } from 'rxjs';
//FileUpload API
import { FileuploadService } from '../service/fileupload.service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

//파일 ngrx
import { Store } from '@ngrx/store';
import { addFileAction } from '../store/reducers/hero/file/file.actions'
import { getFileList } from '../store/reducers/hero/file/file.selectors'
interface Files{
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
  public fileList$ = this.store.select(getFileList)

  constructor(private http: HttpClient, private fileuploadService:FileuploadService,private store: Store) { 
    
  }

  ngOnInit() {
    this.http.get(this.SERVER_URL+'/coffees/all').subscribe(
      (res) => {
        console.log(res);
        
      }
    )
  }

  pushArray(){
    const items = {
            id:-1,
            file: this.formData,
            progressBar:0,
            loaded:0,
            total:0
    }
    this.store.dispatch(addFileAction({file: items}));
  }

  submit(){

    // of(...this.list)
    //   .pipe(
    //     tap((item) => console.log('item : ',item)),
    //     mergeMap(item =>
    //       this.fileuploadService.fileUplaod(item.formdata).pipe(
    //         filter(value => value.type === 1),
    //         map(value => Object.assign(item,value )),
    //       )
    //     )
    //   )
    //   .subscribe(
    //     (event: Files)=>{
    //     console.log(event);
        
    //     if(event.type === 1){
    //         const progress = Math.round(event.loaded / event.total * 100);
    //         event.progressBar = Math.round(event.loaded / event.total * 100);
    //         this.progressBar = progress;
    //         this.loaded = event.loaded;
    //         this.total = event.total;
    //       }
    //     },
    //     err =>{
    //       console.error('err : ',err);      
    //     }
    //   )
  }

  onFileSelected($event:any){
    const file:any = $event.target.files[0];
    this.formData.append('file',file);
  }

}
