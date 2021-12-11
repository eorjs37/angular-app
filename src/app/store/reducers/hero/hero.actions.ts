import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';

export enum ActionTypes {
    LOAD_HEROES_REQUEST = '[Hero] Load Hero Request111',
    LOAD_HEROES_FAILURE = '[Hero] Load Hero Failure',
    LOAD_HEREOS_SUCCESS = '[Hero] Load Hero Success',

    SAVE_HERO = '[HERO] Save',
    SAVE_HERO_FAILURE = '[HERO] Save Failure',
    SAVE_HERO_SUCCESS = '[HERO] Save Success',

    UPDATE_HERO = '[HERO] Update',
    UPDATE_HERO_FAILURE = '[HERO] Update Failure',
    UPDATE_HERO_SUCCESS = '[HERO] Update Success',

    DELETE_HERO = '[HERO] Delete',
    DELETE_HERO_FAILURE = '[HERO] Delete Failure',
    DELETE_HERO_SUCCESS = '[HERO] Success Failure'
}

export const loadHeroesRequestAction = createAction(
    ActionTypes.LOAD_HEROES_REQUEST,
);

export const loadHeroesSuccessAction = createAction(
    ActionTypes.LOAD_HEREOS_SUCCESS,
    props<{ heroes: Hero[] }>()
);

export const loadHeroFailureAction = createAction(
    ActionTypes.LOAD_HEROES_FAILURE,
    props<{ error: string }>()
);

////
export const saveRequestAction = createAction(
    ActionTypes.SAVE_HERO,
    props<{ hero: Hero }>()
);

export const saveFailAction = createAction(
    ActionTypes.SAVE_HERO_FAILURE,
    props<{ error: string }>()
);

export const saveSuccessAction = createAction(
    ActionTypes.SAVE_HERO_SUCCESS,
    props<{ hero: Hero }>()
);

///

export const updateRequesAction =createAction(
    ActionTypes.UPDATE_HERO,
    props<{ hero: Hero }>()
);

export const updateFailAction = createAction(
    ActionTypes.UPDATE_HERO_FAILURE,
    props<{ error: string }>()
);

export const updateSuccessAction = createAction(
    ActionTypes.UPDATE_HERO_SUCCESS,
    props<{ hero: Hero }>()
);

////

export const deleteRequestAction = createAction(
    ActionTypes.DELETE_HERO
);

export const deleteFailAction = createAction(
    ActionTypes.DELETE_HERO_FAILURE,
    props<{ error: string }>()
);

export const deleteSuccessAction = createAction(
    ActionTypes.DELETE_HERO_SUCCESS,
    props<{id:number}>()
)