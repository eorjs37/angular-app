import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
//FileUpload API
import { FileuploadService } from '../service/fileupload.service';

//파일 ngrx
import { Store } from '@ngrx/store';
import { addFileAction,beforeSendArrayFile } from '../store/reducers/file/file.actions'
import { getFileList } from '../store/reducers/file/file.selectors';

import { File } from '../store/reducers/file/file';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import * as _ from 'lodash';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
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
  public list: File[]=[];
  public fileList$ = this.store.select(getFileList);
  public fileList: File[];
  private finshCount:number = 0;
  private errorCount:number = 0;
  public isFinsh:boolean=false;

  constructor(private fileuploadService:FileuploadService,
              private store: Store) { 
    
    
  }

  ngOnInit() {
    this.fileuploadService.getCoffeeList().subscribe();

    this.fileList$.subscribe(
      (result)=>{
        this.fileList = _.cloneDeep(result);
      },
      (err)=>{
        console.error('err : ',err);
      },
      ()=>{
        console.log('complete');
      }
    )
    
  }

  pushArray(){
    
    const fileItem:File ={
      id:0,
      file:this.formData,
      progressBar:0,
      loaded:0,
      total:0,
      isFinsh:false,
      isError:false
    }
    this.store.dispatch(addFileAction({file:fileItem}))
  }

  submit(){
    this.fileList.forEach((fileItem)=>{
      const formData= new FormData();
      formData.append('id',   fileItem.id as any) ;
      formData.append('file' , fileItem.file.get('file'));
      this.fileuploadService.fileUplaod(formData)
      .pipe(
        timeout(2000),
      )
      .subscribe(
        (event: (HttpEvent<any>))=>{
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request has been made!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has been received!');
              break;
            case HttpEventType.UploadProgress:
              fileItem.progressBar = Math.round((event.loaded / event.total) * 100);
              break;
            case HttpEventType.Response:
              console.log('User successfully created!', event.body);
              setTimeout(() => {
                this.finshCount++;
                fileItem.isFinsh = true;
              }, 2000);
              break;
            default:
              break;
          }
        },
        (err)=>{
          console.error(`${fileItem.id} : file upload error `, err);
          setTimeout(() => {
            fileItem.progressBar = 0;
            this.errorCount++;
            fileItem.isError = true;
          }, 2000);
          
        },
        ()=>{
          console.log(`${fileItem.id} : finally`);
          if(this.fileList.length === (this.finshCount + this.errorCount)){
            this.isFinsh = true;
          }
        }
      )
    })

  }

  onFileSelected($event:any){
    const file:any = $event.target.files[0];
    this.formData.append('file',file);
  }

}

