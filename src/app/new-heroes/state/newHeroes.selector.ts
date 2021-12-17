import { createSelector ,createFeatureSelector} from "@ngrx/store";
import { NewHeroState } from "./newHeroes.reducer";
import { selectAll } from "./newHeroes.reducer";

export const newHeroesFeatureSelector = createFeatureSelector<NewHeroState>('newHero');
export const newHeroesFeatureSelector2 = createSelector(
    newHeroesFeatureSelector,
    (state: NewHeroState) => state.heroes
)
export const getHeroes = createSelector(
    newHeroesFeatureSelector,
    selectAll
)