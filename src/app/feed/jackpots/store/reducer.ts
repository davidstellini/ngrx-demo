import { createReducer, on } from '@ngrx/store';
import { Jackpot } from '../model';
import {
  fetchJackpots,
  fetchJackpotsFail,
  fetchJackpotsSuccess,
  JackpotsActionType,
} from './action';
import { StateSlice } from '../../../model';

export type JackpotsState = StateSlice<Jackpot>;

const initialState: JackpotsState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};

const jackpotsReducer = createReducer(
  initialState,
  on(fetchJackpots, () => ({
    ...initialState,
    loading: true,
  })),
  on(fetchJackpotsSuccess, (state, { payload }) => ({
    ...state,
    data: payload,
    loading: false,
    loaded: true,
  })),
  on(fetchJackpotsFail, (state, { payload }) => ({
    ...state,
    error: payload,
  }))
);

export const reducer = (state: JackpotsState, action: JackpotsActionType) =>
  jackpotsReducer(state, action);
