import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/service/hero.service';
import * as heroesActions from './hero.actions';

@Injectable()
export class HeroStoreEffects{
    constructor(private heroService: HeroService, private actions$: Actions) { }
    
    loadHeroRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(heroesActions.loadHeroesRequestAction),
        switchMap(() => {
            return this.heroService.getHeroes().pipe(
                map((heroes: any) => {
                    return heroesActions.loadHeroesSuccessAction({ heroes })
                }),
                catchError((error: any) => {
                    return observableOf(heroesActions.loadHeroFailureAction({ error }))
                })
            )
        })
    ));

    saveRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(heroesActions.saveRequestAction),
        switchMap(action => {
            return this.heroService.addHero(action.hero).pipe(
                map((hero: any) => {
                    return heroesActions.saveSuccessAction({ hero })
                }),
                catchError(error => {
                    return observableOf(heroesActions.saveFailAction({ error }))
                })
            )
        })
    ));

    updateRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(heroesActions.updateRequesAction),
        switchMap(action => {
            return this.heroService.updateHero(action.hero).pipe(
                map((hero: any) => {
                    return heroesActions.updateSuccessAction({ hero });
                }),
                catchError((error: string) => {
                    return observableOf(heroesActions.updateFailAction({error}))
                })
            )
        })
    ))
}