import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom,tap, filter } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';
import { addBeforeFileAction,addFileSuccess, beforeSendArrayFile } from './file.actions';
import { FileuploadService } from 'src/app/service/fileupload.service';
import { Store ,Action } from '@ngrx/store';
import { getFileList } from './file.selectors';
import { from } from 'rxjs';
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

    sendArrayFile$ = createEffect(() => this.actions$.pipe(
        ofType(beforeSendArrayFile),
        withLatestFrom(this.store.select(getFileList)),
        // filter((list) => {
        //     return list
        // }), 
        mergeMap((fileList:any) =>
            this.apiService.fileUplaod(fileList.file)
            .pipe(
                map((res:HttpEvent<any>) => addFileSuccess({res}))
            )
        )

    ))
}