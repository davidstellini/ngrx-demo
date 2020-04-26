import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GamesBackend } from '../services/games.backend';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fetchGames, fetchGamesFail, fetchGamesSuccess } from './action';
import { of } from 'rxjs';
import { Game } from '../model';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private gamesBackend: GamesBackend) {}

  fetchGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGames),
      switchMap(() =>
        this.gamesBackend.getGames().pipe(
          map((games: Game[]) =>
            fetchGamesSuccess({
              payload: games,
            })
          ),
          catchError((error) => of(fetchGamesFail(error)))
        )
      )
    )
  );
}
