import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { map, mergeMap,tap } from 'rxjs/operators';
import {  HttpEvent, HttpEventType } from '@angular/common/http';
import {  addBeforeFileAction,addFileSuccess } from './file.actions';
import { FileuploadService } from 'src/app/service/fileupload.service';

interface Files{
    id:number,
    formdata:FormData,
    type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress,
    loaded: number,
    total?: number,
    progressBar:number,
}

@Injectable()
export class FileEffects{

    constructor(private actions$: Actions,private apiService: FileuploadService)
    {}

    addFile$ = createEffect(() => this.actions$.pipe(
        ofType(addBeforeFileAction),
        tap((file) => console.log(file)),
        mergeMap((fb:any) => this.apiService.fileUplaod(fb.file)
            .pipe(
                map((res:HttpEvent<any>) => addFileSuccess({res}))
            )
        )
    ))
}