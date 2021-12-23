import { loadCoffeeRequest, addCoffee, addCoffeeCollections, removeCoffeeCollections } from './coffee.actions';
import { createReducer, on } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee';
import { Collections } from 'src/app/models/collections';

export interface CoffeeState{
    coffees: Coffee[];
    collections: Collections[];
    error?: string;
}

export const initialState: CoffeeState = {
    coffees: [],
    collections:[],
    error: 'no-error'
}

export const coffeeReducer = createReducer(
    initialState,
    on(loadCoffeeRequest, (state, { coffees }) => ({
        ...state,
        coffees: coffees
    })),
    on(addCoffee, (state, { coffee }) => {
        const maxId = state.coffees[state.coffees.length - 1].id + 1;

        const newCoffee: Coffee = {
            id: maxId,
            menuNm: coffee.menuNm,
            price: coffee.price
        }
        return {
            ...state,
            coffees: [...state.coffees,newCoffee]
        }
    }),
    on(addCoffeeCollections, (state, { coffee }) => {
        const newCollection:Collections = {
            id: coffee.id,
            menuNm: coffee.menuNm,
            quantity: 1,
            totalPrice:coffee.price
        }

        const collectionsLength = state.collections.length;

        
        let newCollections = [];

        //컬렉션이 한개도 없을때는 단순히 push
        if (collectionsLength === 0) {
            newCollections.push(newCollection);
        }
        else {
            const find = state.collections.find(item => item.id === newCollection.id);
            const findIdx = state.collections.findIndex(item => item.id === newCollection.id);

            if (findIdx === -1) {
                if (state.collections.length === 0) {
                    newCollections.push(newCollection);
                } else {
                    newCollections = [
                        ...state.collections,
                        newCollection
                    ]
                }
            } else {
                newCollections = [
                    ...state.collections.slice(0, findIdx),
                    {
                        id: find.id,
                        menuNm: find.menuNm,
                        quantity: find.quantity + 1,
                        totalPrice: find.totalPrice + coffee.price
                    },
                    ...state.collections.slice(findIdx+1)
                ]
            }
        }

        return {
            ...state,
            collections:newCollections
        }
    }),
    on(removeCoffeeCollections, (state, { coffee }) => {
        let newCollections: Collections[] = [];
        
        const find = state.collections.find(item => item.id === coffee.id);
        const findIdx = state.collections.findIndex(item => item.id === coffee.id);
        if (find.quantity === 1) {
            newCollections = [
                ...state.collections.slice(0, findIdx),
                ...state.collections.slice(findIdx+1)
            ]
        } else {
            newCollections = [
                ...state.collections.slice(0, findIdx),
                {
                    id: coffee.id,
                    menuNm: coffee.menuNm,
                    quantity: find.quantity - 1,
                    totalPrice: find.totalPrice - coffee.price
                },
                ...state.collections.slice(findIdx+1)
            ]
        }

        return {
            ...state,
            collections: newCollections
        }
    })
)