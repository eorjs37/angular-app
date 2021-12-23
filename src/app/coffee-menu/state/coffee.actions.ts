import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee";

export enum CoffeeActionsTypes{
    LOAD_COFFEES = "[Coffee] Load Coffee",
    ADD_COFFEE = "[Coffee] Add Coffee",

    ADD_COLLECTIONS = "[Collections] Add Coffee Collections",
    REM_COLLECTIONS = "[Collections] Remove Coffee Collections",
}

export const loadCoffeeRequest = createAction(
    CoffeeActionsTypes.LOAD_COFFEES,
    props<{coffees: Coffee[]}>()
)

export const addCoffee = createAction(
    CoffeeActionsTypes.ADD_COFFEE,
    props<{coffee: Coffee}>()
)

export const addCoffeeCollections = createAction(
    CoffeeActionsTypes.ADD_COLLECTIONS,
    props<{coffee: Coffee}>()
)

export const removeCoffeeCollections = createAction(
    CoffeeActionsTypes.REM_COLLECTIONS,
    props<{coffee: Coffee}>()
)