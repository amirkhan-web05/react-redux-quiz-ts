import { createStore } from "redux";
import { rootReducers } from './reducers/index';

export const store = createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>