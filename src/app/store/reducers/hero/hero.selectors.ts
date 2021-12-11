import { createSelector } from "@ngrx/store";
import { HeroState } from './hero.state';
import { AppState } from "src/app/app.state";


const selectHeroFeature = (state: AppState) => state.heroFeature;

export const getHeroes = createSelector(
    selectHeroFeature,
    (state: HeroState) => state.heroes
)

export const getSelectedHeor = createSelector(
    selectHeroFeature,
    (state: HeroState) => state.selectedHero
)

export const getHeroesError = createSelector(
    selectHeroFeature,
    (state: HeroState) => state.error
)