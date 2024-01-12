import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { basketReducer } from './basket.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  basket: basketReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
