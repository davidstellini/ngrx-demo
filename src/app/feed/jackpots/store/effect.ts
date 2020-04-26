import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JackpotsBackend } from '../services/jackpots.backend';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  fetchJackpots,
  fetchJackpotsFail,
  fetchJackpotsSuccess,
} from './action';
import { of } from 'rxjs';
import { Jackpot } from '../model';

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
}
