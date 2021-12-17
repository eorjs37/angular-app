import * as newHeroActions from './newHeroes.actions'
import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Hero } from 'src/app/models/hero';

export const newHeroesFeatureKey = "newHeroes";

export interface NewHeroState extends EntityState<Hero>{
    selectedNewHeroId: number | null;
    heroes: Hero[];
    loading: boolean;
    loaded: boolean;
    error: string;
}


export const newHeroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();
export const defaultNewHeroes: NewHeroState = {
    ids: [],
    entities: {},
    selectedNewHeroId: null,
    heroes: [],
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = newHeroAdapter.getInitialState(defaultNewHeroes);


export const reducer = createReducer(
    initialState,
    on(newHeroActions.loadHeroesRequest, state => ({
        ...state
    })),
    on(newHeroActions.loadHeroesRequestSuccess, (state, action) => {
        return newHeroAdapter.addMany(
            action.heroes,
            {...state, loading:true, heroes: action.heroes}
     )   
    }),
    on(newHeroActions.loadHeroesRequestFailure, (state, { error }) => ({
        ...state,
        error: error
    })),

    on(newHeroActions.addNewHeroRequest, (state,action) =>{
        return newHeroAdapter.addOne(
            action.hero,
            {...state}
        )
    }),

    on(newHeroActions.loadHeroesRequestSuccess, (state, action) => ({
        ...state,
        error:'no-error'
    })),

    on(newHeroActions.loadHeroesRequestFailure, (state, { error }) => ({
        ...state,
        error: error
    })),

    on(newHeroActions.updateNewHero, (state, { hero }) => {
        const findIndex = state.heroes.findIndex(item => item.id === hero.id);
        return {
            ...state,
            heroes: [
                ...state.heroes.slice(0, findIndex),
                {
                    ...state.heroes[findIndex],
                    name:'ddd'
                },
                ...state.heroes.slice(findIndex+1)
            ]
        }
    })
)

export const { selectAll, selectIds} = newHeroAdapter.getSelectors();