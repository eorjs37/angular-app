import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';
import * as HeroActionTypes from './hero.actions';
import { HeroState } from './hero.state';

export const initialState: HeroState = {
    heroes: [],
    selectedHero: null,
    error: null
}

export const heroReducer = createReducer(
    initialState,
    on(HeroActionTypes.loadHeroesRequestAction, state => ({
        ...state
    })),
    on(HeroActionTypes.loadHeroesSuccessAction, (state, { heroes }) => ({
        ...state,
        heroes: heroes
    })),
    on(HeroActionTypes.loadHeroFailureAction, (state, { error }) => ({
        ...state,
        error: error
    })),

    on(HeroActionTypes.saveRequestAction, state => ({
        ...state
    })),
    on(HeroActionTypes.saveSuccessAction, (state, { hero }) =>( {
        ...state,
        selectedHero: hero,
        error: null
    })),
    on(HeroActionTypes.saveFailAction, (state, { error }) => ({
        ...state,
        error: error
    })),

    on(HeroActionTypes.updateRequesAction, state => ({
        ...state
    })),
    on(HeroActionTypes.updateSuccessAction, (state,{hero}) => ({
        ...state,
        selectedHero: hero,
        error:null
    })),
    on(HeroActionTypes.updateFailAction, (state,{error}) => ({
        ...state,
        error: error
    })),

    on(HeroActionTypes.deleteRequestAction, state => ({
        ...state
    })),
    on(HeroActionTypes.deleteSuccessAction, (state,{id}) => ({
        ...state,
        heroes: state.heroes.filter(x => x.id !== id)
    })),
    on(HeroActionTypes.deleteFailAction, (state,{error}) => ({
        ...state,
        error: error
    })),

)