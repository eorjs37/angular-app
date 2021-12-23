import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoffeeState } from './coffee.reducer';

export const selectCoffeesFeature = createFeatureSelector<CoffeeState>('coffee');

export const selectCoffees = createSelector(
    selectCoffeesFeature,
    (state: CoffeeState) => state.coffees
)

export const selectCollections = createSelector(
    selectCoffeesFeature,
    (state: CoffeeState) => state.collections
)

export const selectCollectionsSum = createSelector(
    selectCoffeesFeature,
    (state: CoffeeState) => {
        let total = state.collections.reduce((acc, cur) => acc + cur.totalPrice, 0);
        console.log('total : ',total);
        
        return total;
    }
)