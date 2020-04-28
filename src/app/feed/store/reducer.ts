import { ActionReducerMap } from '@ngrx/store';

import * as games from '../games/store/reducer';
import { GamesState } from '../games/store/reducer';
import * as jackpots from '../jackpots/store/reducer';
import { JackpotsState } from '../jackpots/store/reducer';

export interface FeedState {
  games: GamesState;
  jackpots: JackpotsState;
}

export const feedReducers: ActionReducerMap<FeedState, any> = {
  games: games.reducer,
  jackpots: jackpots.reducer,
};
