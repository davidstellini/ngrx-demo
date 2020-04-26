import { GamesState } from './reducer';
import { GlobalState } from '../../../model';
import { createSelector } from '@ngrx/store';

const selectGamesState = (state: GlobalState) => state.feed.games;

export const selectGames = createSelector(
  selectGamesState,
  (state: GamesState) => state.data
);
export const selectGamesLoading = createSelector(
  selectGamesState,
  (state: GamesState) => state.loading
);
export const selectGamesLoaded = createSelector(
  selectGamesState,
  (state: GamesState) => state.loaded
);
export const selectGamesError = createSelector(
  selectGamesState,
  (state: GamesState) => state.error
);
