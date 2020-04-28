import { TestBed } from '@angular/core/testing';

import { FeedListService } from './feed-list.service';
import { GamesFacadeStub } from '../../testing/stubs/games-facade.stub';
import { JackpotsFacadeStub } from '../../testing/stubs/jackpots-facade.stub';
import { GamesFacade } from '../games/services/games.facade';
import { JackpotsFacade } from '../jackpots/services/jackpots.facade';
import { AppGameCategoryRoute } from '../../model/app-game-category.model';
import { Game, GameCategory } from '../games/model';
import { GameWithJackpot } from '../store/selector';

describe('FeedListService', () => {
  let feedListService: FeedListService;
  let gamesMockFacade: GamesFacadeStub;
  let jackpotsMockFacade: JackpotsFacadeStub;

  beforeEach(() => {
    gamesMockFacade = new GamesFacadeStub();
    jackpotsMockFacade = new JackpotsFacadeStub();

    TestBed.configureTestingModule({
      providers: [
        { provide: GamesFacade, useValue: gamesMockFacade },
        { provide: JackpotsFacade, useValue: jackpotsMockFacade },
      ],
    });
    feedListService = TestBed.inject(FeedListService);
  });

  it('should be created', () => {
    expect(feedListService).toBeTruthy();
  });

  it('should fetch games', () => {
    const gamesSpy = spyOn(gamesMockFacade, 'fetchGames');

    feedListService.fetchFeed();

    expect(gamesSpy).toHaveBeenCalled();
  });

  it('should fetch jackpots', () => {
    const jackpotsSpy = spyOn(jackpotsMockFacade, 'fetchJackpots');

    feedListService.fetchFeed();

    expect(jackpotsSpy).toHaveBeenCalled();
  });

  it('should make predicate for route category', () => {
    const categoryFromRoute = AppGameCategoryRoute.New;

    const predicate = feedListService.makePredicateForRouteCategory(
      categoryFromRoute
    );

    expect(
      predicate({
        categories: [GameCategory.New],
      } as GameWithJackpot)
    ).toBe(true);

    expect(
      predicate({
        categories: [GameCategory.Virtual],
      } as GameWithJackpot)
    ).toBe(false);
  });

  it('should filter other as ball, virtual, fun.', () => {
    const categoryFromRoute = AppGameCategoryRoute.Other;

    const predicate = feedListService.makePredicateForRouteCategory(
      categoryFromRoute
    );

    expect(
      predicate({
        categories: [GameCategory.New],
      } as GameWithJackpot)
    ).toBe(false);

    expect(
      predicate({
        categories: [GameCategory.Virtual],
      } as GameWithJackpot)
    ).toBe(true);

    expect(
      predicate({
        categories: [GameCategory.Ball],
      } as GameWithJackpot)
    ).toBe(true);

    expect(
      predicate({
        categories: [GameCategory.Fun],
      } as GameWithJackpot)
    ).toBe(true);
  });
});
