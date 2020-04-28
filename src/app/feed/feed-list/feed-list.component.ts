import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../games/model';
import { FeedListService } from './feed-list.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  currentCategory: string = '';
  currentCategory$ = this.route.params.pipe(map(({ category }) => category));
  gamesWithJackpot$ = this.currentCategory$.pipe(
    switchMap((category) =>
      this.feedListService.gamesByRouteCategory$(category)
    )
  );

  constructor(
    private feedListService: FeedListService,
    private route: ActivatedRoute
  ) {
    this.currentCategory$.subscribe((currentCategory) => {
      this.currentCategory = currentCategory;
      console.log('current category = ', currentCategory);
    });
  }

  trackBy(index: number, game: Game) {
    return game && game.id && this.currentCategory;
  }

  ngOnInit() {
    this.feedListService.fetchFeed();
  }
}
