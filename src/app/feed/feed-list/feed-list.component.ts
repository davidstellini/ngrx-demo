import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GamesFacade } from '../games/services/games.facade';
import { JackpotsFacade } from '../jackpots/services/jackpots.facade';
import { nativeSmoothScroll } from '@smoovy/scroller';

@Component({
  selector: 'app-feed',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
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

    // nativeSmoothScroll({
    //   element: document.querySelector('scrollable-content'),
    // });
  }
}
