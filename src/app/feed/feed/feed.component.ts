import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GamesFacade } from '../games/services/games.facade';
import { JackpotsFacade } from '../jackpots/services/jackpots.facade';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  gamesWithJackpot$ = this.gamesFacade.gamesWithJackpot$.pipe(
    filter((games) => !!games)
  );

  constructor(
    private gamesFacade: GamesFacade,
    private jackpotsFacade: JackpotsFacade
  ) {}

  ngOnInit() {
    this.gamesFacade.fetchGames();
    this.jackpotsFacade.fetchJackpots();
  }
}
