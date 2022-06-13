import { Injectable } from '@angular/core';
import { act, Actions, createEffect,ofType } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom,tap, filter } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';
import { addBeforeFileAction,addFileSuccess, beforeSendArrayFile } from './file.actions';
import { FileuploadService } from 'src/app/service/fileupload.service';
import { Store ,Action } from '@ngrx/store';
import { getFileList } from './file.selectors';
import { from, of } from 'rxjs';
import { File } from './file';

@Injectable()
export class FileEffects{

    constructor(private actions$: Actions,private apiService: FileuploadService, private store:Store)
    {}

    addFile$ = createEffect(() => this.actions$.pipe(
        ofType(addBeforeFileAction),
        mergeMap((fb:any) => this.apiService.fileUplaod(fb.file)
            .pipe(
                map((res:HttpEvent<any>) => addFileSuccess({res}))
            )
        )
    ))

    //2022.06.14 진행중
    sendArrayFile$ = createEffect(() => this.actions$.pipe(
        ofType(beforeSendArrayFile),//1.beforeSendArrayFile 호출
        withLatestFrom(this.store.select(getFileList)), //2. getFileList 가져오기
        //3.
        mergeMap((fileList:any) =>
            this.apiService.fileUplaod(fileList.file)
            .pipe(
                map((res:HttpEvent<any>) => addFileSuccess({res}))
            )
        )

    ))
}