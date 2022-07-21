import { Injectable } from '@angular/core';
import { act, Actions, createEffect,ofType,concatLatestFrom  } from '@ngrx/effects';
import { map, mergeMap, withLatestFrom,tap, filter, concatMap, switchMap, catchError } from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';
import { addBeforeFileAction,addFileSuccess, beforeSendArrayFile } from './file.actions';
import { FileuploadService } from 'src/app/service/fileupload.service';
import { Store  } from '@ngrx/store';
import { getFileList } from './file.selectors';
import { from, of } from 'rxjs';

@Injectable()
export class FileEffects{

    constructor(private actions$: Actions,private apiService: FileuploadService, private store$:Store)
    {}

    addFile$ = createEffect(() => this.actions$.pipe(
        ofType(addBeforeFileAction),
        mergeMap((fb:any) => this.apiService.fileUplaod(fb.file)
            .pipe(
                map((res:HttpEvent<any>) => addFileSuccess({res}))
            )
        )
    ))
    
    sendFile$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(beforeSendArrayFile),
            concatLatestFrom(() => this.store$.select(getFileList)),
            map(([_,actions])=> {
                from(actions).pipe(
                    concatMap(item => this.apiService.fileUplaod(item).pipe(
                        map((res:HttpEvent<any>) => addFileSuccess({res})),
                        // catchError((err) => console.error('err : ',err))
                    ))
                ).subscribe()
            }),

           
        ),
        { dispatch: false }
    )
}