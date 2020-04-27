import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JackpotsBackend } from '../services/jackpots.backend';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import {
  fetchJackpots,
  fetchJackpotsFail,
  fetchJackpotsSuccess,
} from './action';
import { interval, of, timer } from 'rxjs';
import { Jackpot } from '../model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class JackpotsEffects {
  constructor(
    private actions$: Actions,
    private jackpotsBackend: JackpotsBackend
  ) {}

  fetchJackpots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchJackpots),
      switchMap(() =>
        this.jackpotsBackend.getJackpots().pipe(
          map((jackpots: Jackpot[]) =>
            fetchJackpotsSuccess({
              payload: jackpots,
            })
          ),
          catchError((error) => of(fetchJackpotsFail(error)))
        )
      )
    )
  );

  fetchJackpotsPolling$ = createEffect(() =>
    interval(environment.jackpotPollingInterval).pipe(mapTo(fetchJackpots()))
  );
}
