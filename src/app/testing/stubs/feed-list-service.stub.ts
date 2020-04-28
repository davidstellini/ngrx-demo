import { GameWithJackpot } from '../../feed/store/selector';
import { AppGameCategoryRoute } from '../../model/app-game-category.model';

export class FeedListServiceStub {
  fetchFeed: () => {};
  gamesByRouteCategory$: (routeCategory: AppGameCategoryRoute) => {};
  makePredicateForRouteCategory(
    gameCategoryRoute: AppGameCategoryRoute
  ): (game: GameWithJackpot) => boolean {
    return () => true;
  }
}
