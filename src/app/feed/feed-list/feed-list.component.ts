import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../games/model';
import { FeedListService } from './feed-list.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  gamesWithJackpot$ = this.route.params.pipe(
    switchMap(({ category }) =>
      this.feedListService.gamesByRouteCategory$(category)
    )
  );

  constructor(
    private feedListService: FeedListService,
    private route: ActivatedRoute
  ) {}

  trackBy(index: number, game: Game) {
    console.log(game.id);
    return game && game.id;
  }

  ngOnInit() {
    this.feedListService.fetchFeed();
  }
}
