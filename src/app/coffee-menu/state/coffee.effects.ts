import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { CoffeeActionsTypes } from './coffee.actions';
@Injectable()
export class CoffeeEffects { 

    loadCoffee$ = createEffect(() => this.actions$.pipe(
        ofType(CoffeeActionsTypes.BEFORE_LOAD_COFFEES),
        mergeMap(() => this.coffeeService.getCoffeeList()
            .pipe(
                map(coffees => ({ type: CoffeeActionsTypes.LOAD_COFFEES_SUCCESS, coffees: coffees })),
                catchError(() => of({type: CoffeeActionsTypes.LOAD_COFFEES_FAIL}))
            )
        )
      )
    );

    constructor(private actions$: Actions,
        private coffeeService: ApiService)
    {}
}