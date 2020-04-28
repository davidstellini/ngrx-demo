import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Game, GameCategory } from '../games/model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GameWithJackpot } from '../store/selector';
import { AppGameCategoryRoute } from '../../model/app-game-category.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnChanges {
  private _backgroundImageUrl: SafeUrl;

  public imgError = false;
  public category: GameCategory = null;
  public categoryTypes = GameCategory;

  public get backgroundImageUrl() {
    return this._backgroundImageUrl;
  }

  @Input() game?: GameWithJackpot = null;
  @Input() showRibbon = false;
  @Input() currentCategory: AppGameCategoryRoute;

  constructor(private sanitizer: DomSanitizer) {}

  showJackpot = (): boolean =>
    this.game && typeof this.game.jackpotAmount === 'number';

  getRibbonCategoryFromGame(
    game: Game
  ): GameCategory.Top | GameCategory.New | null {
    if (!game.categories) {
      return null;
    }

    switch (this.currentCategory) {
      case AppGameCategoryRoute.Top:
        return game.categories.includes(GameCategory.New) && GameCategory.New;
      case AppGameCategoryRoute.New:
        return game.categories.includes(GameCategory.Top) && GameCategory.Top;
      default:
        if (game.categories.includes(GameCategory.Top)) {
          return GameCategory.Top;
        } else if (game.categories.includes(GameCategory.New)) {
          return GameCategory.New;
        }

        return null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.game) {
      const game = changes.game.currentValue as Game;

      if (game.image !== (changes.game.previousValue || {}).image) {
        this._backgroundImageUrl = this.sanitizer.bypassSecurityTrustUrl(
          game.image
        );
      }
    }

    this.category = this.getRibbonCategoryFromGame(this.game);
  }
}
