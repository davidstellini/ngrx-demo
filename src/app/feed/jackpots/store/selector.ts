import { JackpotsState } from './reducer';
import { GlobalState } from '../../../model';
import { createSelector } from '@ngrx/store';

const selectJackpotsState = (state: GlobalState) => state.feed.jackpots;

export const selectJackpots = createSelector(
  selectJackpotsState,
  (state: JackpotsState) => state.data
);
export const selectJackpotsLoading = createSelector(
  selectJackpotsState,
  (state: JackpotsState) => state.loading
);
export const selectJackpotsLoaded = createSelector(
  selectJackpotsState,
  (state: JackpotsState) => state.loaded
);
export const selectJackpotsError = createSelector(
  selectJackpotsState,
  (state: JackpotsState) => state.error
);
