import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
//FileUpload API
import { FileuploadService } from '../service/fileupload.service';

//파일 ngrx
import { Store } from '@ngrx/store';
import { addFileAction,beforeSendArrayFile } from '../store/reducers/file/file.actions'
import { getFileList } from '../store/reducers/file/file.selectors';

import { File } from '../store/reducers/file/file';
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

  constructor(private fileuploadService:FileuploadService,
              private store: Store) { 
    
    
  }

  ngOnInit() {
    this.fileuploadService.getCoffeeList().subscribe();

    this.fileList$.subscribe(
      (result)=>{
        console.log(result);
        this.fileList = result;
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
      total:0
    }
    this.store.dispatch(addFileAction({file:fileItem}))
  }

  submit(){
    this.store.dispatch(beforeSendArrayFile());
  }

  onFileSelected($event:any){
    const file:any = $event.target.files[0];
    this.formData.append('file',file);
  }

}

