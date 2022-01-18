import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { DesertActionsTypes } from './desert.actions';

@Injectable()
export class DesertEffects { 

    loadDesert$ = createEffect(() => this.actions$.pipe(
            ofType(DesertActionsTypes.BEFORE_LOAD_DESERTS),
            mergeMap(() => this.apiService.getDesert()
                .pipe(
                    map(desert => ({ type: DesertActionsTypes.LOAD_DESERTS_SUCCESS, deserts: desert })),
                    catchError(() => of({type: DesertActionsTypes.LOAD_DESERTS_FAIL}))
                )
            )
        )
    )


    constructor(private actions$: Actions,
        private apiService: ApiService) {
        
        }
}