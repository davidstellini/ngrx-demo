import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGames } from '../store/selector';
import { fetchGames } from '../store/action';
import { GlobalState } from '../../../model';
import {
  gamesWithJackpot,
  GameWithJackpot,
  selectGamesByPredicate,
} from '../../store/selector';

@Injectable({
  providedIn: 'root',
})
export class GamesFacade {
  games$ = this.store.select(selectGames);
  gamesWithJackpot$ = this.store.select(gamesWithJackpot);
  getGamesByPredicate$ = (predicate: (game: GameWithJackpot) => boolean) =>
    this.store.select(selectGamesByPredicate(predicate));

  constructor(private store: Store<GlobalState>) {}

  fetchGames() {
    this.store.dispatch(fetchGames());
    return this.games$;
  }
}
