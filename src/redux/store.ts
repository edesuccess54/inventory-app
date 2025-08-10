import  { combineReducers, configureStore } from "@reduxjs/toolkit"
import inventoryReducer from "./inventory/inventory.slice"


const rootReducer = combineReducers({
    inventory: inventoryReducer
})

 export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const dispatch = store.dispatch