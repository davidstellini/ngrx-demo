import { createReducer, on } from '@ngrx/store';
import { Game } from '../model';
import {
  fetchGames,
  fetchGamesFail,
  fetchGamesSuccess,
  GamesActionType,
} from './action';
import { StateSlice } from '../../../model';

export type GamesState = StateSlice<Game>;

const initialState: GamesState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};

const gamesReducer = createReducer(
  initialState,
  on(fetchGames, (state) => ({
    ...initialState,
    loading: true,
  })),
  on(fetchGamesSuccess, (state, { payload }) => ({
    ...state,
    data: payload,
    loading: false,
    loaded: true,
  })),
  on(fetchGamesFail, (state, { payload }) => ({
    ...state,
    error: payload,
  }))
);

export const reducer = (state: GamesState, action: GamesActionType) =>
  gamesReducer(state, action);
