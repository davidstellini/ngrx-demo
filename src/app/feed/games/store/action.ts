import { createAction, props } from '@ngrx/store';
import { FetchGames, FetchGamesFail, FetchGamesSuccess } from './action-type';
import { Game } from '../model';

export const fetchGames = createAction(FetchGames);
export const fetchGamesSuccess = createAction(
  FetchGamesSuccess,
  props<{ payload: Game[] }>()
);
export const fetchGamesFail = createAction(
  FetchGamesFail,
  props<{ payload: string }>()
);

export type GamesActionType =
  | typeof fetchGames
  | typeof fetchGamesSuccess
  | typeof fetchGamesFail;
