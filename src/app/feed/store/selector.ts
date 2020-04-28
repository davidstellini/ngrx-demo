import { createSelector } from '@ngrx/store';
import { selectGames } from '../games/store/selector';
import { selectJackpots } from '../jackpots/store/selector';
import { Game } from '../games/model';

export interface GameWithJackpot extends Game {
  jackpotAmount: number | null;
}
export const gamesWithJackpot = createSelector(
  selectGames,
  selectJackpots,
  (games, jackpots): GameWithJackpot[] =>
    games.map((game) => {
      const gameWithJackpot = jackpots.find(
        (jackpot) => jackpot.game === game.id
      );

      return {
        ...game,
        jackpotAmount: (gameWithJackpot && gameWithJackpot.amount) || null,
      };
    })
);

export const selectGamesByPredicate = (
  predicate: (game: GameWithJackpot) => boolean
) => createSelector(gamesWithJackpot, (games) => games.filter(predicate));
