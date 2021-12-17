import { createAction, props } from "@ngrx/store";
import { Hero } from "src/app/models/hero";
export enum NewHeroActionTypes{
    LOAD_HEREOS = "[Heroes] Load Hereos",
    LOAD_HEREOS_SUCCESS = "[Heroes] Load Heroes Success",
    LOAD_HEORES_FAILURE = "[Heroes] Load Heroes Failure",

    ADD_NEW_HERO = '[Hero] Add Hero',
    ADD_NEW_HERO_SUCCESS = '[Hero] Add Hero Success',
    ADD_NEW_HERO_FAILURE = '[Hero] Add Hero Failure',

    UPDATE_NEW_HERO ='[Hero] Updat Hero'
}

export const loadHeroesRequest = createAction(
    NewHeroActionTypes.LOAD_HEREOS
)

export const loadHeroesRequestSuccess = createAction(
    NewHeroActionTypes.LOAD_HEREOS_SUCCESS,
    props<{heroes: Hero[]}>()
)

export const loadHeroesRequestFailure = createAction(
    NewHeroActionTypes.LOAD_HEORES_FAILURE,
    props<{error: any}>()
)

export const addNewHeroRequest = createAction(
    NewHeroActionTypes.ADD_NEW_HERO,
    props<{hero: Hero}>()
)

export const addNewHeroRequestSuccess = createAction(
    NewHeroActionTypes.ADD_NEW_HERO_SUCCESS,
    props<{result: any}>()
)

export const addNewHeroRequestFailure = createAction(
    NewHeroActionTypes.ADD_NEW_HERO_FAILURE,
    props<{error: any}>()
)

export const updateNewHero = createAction(
    NewHeroActionTypes.UPDATE_NEW_HERO,
    props<{hero: Hero}>()
)