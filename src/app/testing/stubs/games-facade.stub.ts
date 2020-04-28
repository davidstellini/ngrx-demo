import { BehaviorSubject } from 'rxjs';
import { Game } from '../../feed/games/model';
import { GameWithJackpot } from '../../feed/store/selector';

export class GamesFacadeStub {
  gamesSubj$ = new BehaviorSubject<Game[]>([]);
  games$ = this.gamesSubj$.asObservable();
  gamesWithJackpotSubj$ = new BehaviorSubject<GameWithJackpot[]>([]);
  gamesWithJackpot$ = this.gamesWithJackpotSubj$.asObservable();
  getGamesByPredicate$ = (predicate: (game: GameWithJackpot) => boolean) =>
    this.games$;
  fetchGames = () => this.games$;
}
