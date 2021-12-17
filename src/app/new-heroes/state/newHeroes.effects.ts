import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, switchMap,map } from 'rxjs/operators';
import { HeroService } from 'src/app/service/hero.service';
import * as newHeroesActions from './newHeroes.actions';

@Injectable()
export class NewHeroEffect{
    constructor(private heroService: HeroService, private actions$: Actions) { }
    
    loadNewHeroRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(newHeroesActions.loadHeroesRequest),
        switchMap(() => {
            return this.heroService.getHeroes().pipe(
                map((heroes: any) => {
                    return newHeroesActions.loadHeroesRequestSuccess({heroes})
                }),
                catchError((error: any) => {
                    return observableOf(newHeroesActions.loadHeroesRequestFailure({error}))
                })
            )
        })
    ))

    loadNewHeroAddRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(newHeroesActions.addNewHeroRequest),
        switchMap(action => {
            return this.heroService.addHero(action.hero).pipe(
                map((result: any) => {
                    return newHeroesActions.addNewHeroRequestSuccess({result})
                }),
                catchError((error: any) => {
                    return observableOf(newHeroesActions.addNewHeroRequestFailure({error}))
                })
            )
        })
    ))
}