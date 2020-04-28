import { Injectable } from '@angular/core';
import { AppGameCategoryRoute } from '../../model/app-game-category.model';
import { GameWithJackpot } from '../store/selector';
import { GameCategory } from '../games/model';
import { Observable } from 'rxjs';
import { GamesFacade } from '../games/services/games.facade';
import { JackpotsFacade } from '../jackpots/services/jackpots.facade';

/**
 * Finds a game that matches one or more of categories;
 * @param game
 * @param categoriesToSearch
 */
const gameCategoryFilter = (
  game: GameWithJackpot,
  categoriesToSearch: GameCategory[]
) =>
  !!game.categories.find((gameCategory) =>
    categoriesToSearch.find((category) => category === gameCategory)
  );

/**
 * Finds games that have jackpots:
 * //Todo: GameWithJackpot / Game should be a class so we can use instanceof checks instead;
 * @param game
 */
const jackpotFilter = (game: GameWithJackpot) =>
  typeof game.jackpotAmount === 'number';

@Injectable({
  providedIn: 'root',
})
export class FeedListService {
  constructor(
    private gamesFacade: GamesFacade,
    private jackpotsFacade: JackpotsFacade
  ) {}

  fetchFeed() {
    this.gamesFacade.fetchGames();
    this.jackpotsFacade.fetchJackpots();
  }

  gamesByRouteCategory$(
    routeCategory: AppGameCategoryRoute
  ): Observable<GameWithJackpot[]> {
    const predicate = this.makePredicateForRouteCategory(routeCategory);

    return this.gamesFacade.getGamesByPredicate$(predicate);
  }

  makePredicateForRouteCategory(
    gameCategoryRoute: AppGameCategoryRoute
  ): (game: GameWithJackpot) => boolean {
    switch (gameCategoryRoute) {
      // The following routes need a custom predicate / filter
      case AppGameCategoryRoute.Jackpots:
        return jackpotFilter;

      case AppGameCategoryRoute.Other:
        return (game) =>
          gameCategoryFilter(game, [
            GameCategory.Ball,
            GameCategory.Virtual,
            GameCategory.Fun,
          ]);

      // These are unknown, so they will fall through to default:
      case AppGameCategoryRoute.Live:
      case AppGameCategoryRoute.Table:

      // The following types map directly into categories, So they can be filtered directly by category:
      case AppGameCategoryRoute.Top:
      case AppGameCategoryRoute.New:
      case AppGameCategoryRoute.Blackjack:
      case AppGameCategoryRoute.Roulette:
      case AppGameCategoryRoute.Poker:
      default:
        const gameCategory: GameCategory = gameCategoryRoute as any;

        return (game) => gameCategoryFilter(game, [gameCategory]);
    }
  }
}
