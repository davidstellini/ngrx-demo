import { Component, ElementRef, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { GamesFacade } from '../games/services/games.facade';
import { JackpotsFacade } from '../jackpots/services/jackpots.facade';
import { combineLatest } from 'rxjs';
import { GameWithJackpot } from '../store/selector';

@Component({
  selector: 'app-feed',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  // Note - we don't iterate over gamesWithJackpot$ directly because this is re-created each time the jackpots are updated.
  gamesJackpotMap: Map<string, GameWithJackpot> = null;
  gamesWithJackpot$ = this.gamesFacade.gamesWithJackpot$;
  games$ = this.gamesFacade.games$;

  getGameWithJackpot(gameId: string) {
    return this.gamesJackpotMap && this.gamesJackpotMap.get(gameId);
  }

  constructor(
    private gamesFacade: GamesFacade,
    private jackpotsFacade: JackpotsFacade,
    private elementRef: ElementRef
  ) {
    this.gamesWithJackpot$
      // todo- memory leak
      .subscribe(
        (gamesWithJackpot) =>
          (this.gamesJackpotMap = new Map(
            gamesWithJackpot.map((game) => [game.id, game])
          ))
      );
  }

  ngOnInit() {
    this.gamesFacade.fetchGames();
    this.jackpotsFacade.fetchJackpots();
  }
}
