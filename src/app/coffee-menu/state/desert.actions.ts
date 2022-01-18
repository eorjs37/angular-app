import { createAction, props } from "@ngrx/store";
import { Desert } from "src/app/models/desert";

export enum DesertActionsTypes { 
    BEFORE_LOAD_DESERTS = "[Desert] Before Load Deserts",
    LOAD_DESERTS = "[Desert] Load DESERTS",
    LOAD_DESERTS_SUCCESS = "[Desert API] Load DESERTS Success",
    LOAD_DESERTS_FAIL = "[Desert API] Load DESERTS Fail",
}

export const beforeLoadDesert = createAction(
    DesertActionsTypes.BEFORE_LOAD_DESERTS
)
export const loadSuccessDeserts = createAction(
    DesertActionsTypes.LOAD_DESERTS_SUCCESS,
    props<{deserts: Desert[]}>()
)
