import { createAction, props } from '@ngrx/store';
import {
  FetchJackpots,
  FetchJackpotsFail,
  FetchJackpotsSuccess,
} from './action-type';
import { Jackpot } from '../model';

export const fetchJackpots = createAction(FetchJackpots);
export const fetchJackpotsSuccess = createAction(
  FetchJackpotsSuccess,
  props<{ payload: Jackpot[] }>()
);
export const fetchJackpotsFail = createAction(
  FetchJackpotsFail,
  props<{ payload: string }>()
);

export type JackpotsActionType =
  | typeof fetchJackpots
  | typeof fetchJackpotsSuccess
  | typeof fetchJackpotsFail;
