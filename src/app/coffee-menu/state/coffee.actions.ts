import { createAction, props } from "@ngrx/store";
import { Coffee } from "src/app/models/coffee";

export enum CoffeeActionsTypes{
    BEFORE_LOAD_COFFEES = "[Coffee] Before Load Coffee",
    LOAD_COFFEES = "[Coffee] Load Coffee",
    LOAD_COFFEES_SUCCESS = "[Coffees API] Coffees Load Coffees",
    LOAD_COFFEES_FAIL = "[Coffees API] Coffees Load Fail",

    ADD_COFFEE = "[Coffee] Add Coffee",

    ADD_COLLECTIONS = "[Collections] Add Coffee Collections",
    REM_COLLECTIONS = "[Collections] Remove Coffee Collections",
}

export const loadCoffeeRequest = createAction(
    CoffeeActionsTypes.LOAD_COFFEES,
    props<{coffees: Coffee[]}>()
)

export const beforeLoadCoffee = createAction(
    CoffeeActionsTypes.BEFORE_LOAD_COFFEES
)

export const loadSuccessCoffee = createAction(
    CoffeeActionsTypes.LOAD_COFFEES_SUCCESS,
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