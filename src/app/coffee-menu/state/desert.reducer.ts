import { loadSuccessDeserts } from './desert.actions';
import { createReducer, on } from '@ngrx/store';
import { Desert } from 'src/app/models/desert';

export interface DesertState{
    deserts: Desert[];
}

export const initialState: DesertState = {
    deserts: []
}

export const desertReducer = createReducer(
    initialState,
    on(loadSuccessDeserts, (state, { deserts }) => ({
        ...state,
        deserts: deserts
    }))
)