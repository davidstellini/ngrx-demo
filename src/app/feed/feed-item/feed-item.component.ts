import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Game, GameCategory } from '../games/model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GameWithJackpot } from '../store/selector';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnChanges {
  public imgError = false;
  public category: GameCategory = null;
  public categoryTypes = GameCategory;

  @Input() game?: GameWithJackpot = null;
  @Input() showRibbon = false;
  private _backgroundImageUrl: SafeUrl;
  public get backgroundImageUrl() {
    return this._backgroundImageUrl;
  }

  constructor(private sanitizer: DomSanitizer) {}

  showJackpot = (): boolean => typeof this.game.jackpotAmount === 'number'; // && 'jackpotAmount' in this.game;

  getCategoryFromGame(game: Game): GameCategory.Top | GameCategory.New | null {
    if (game) {
      if (game.categories.find((c) => c === GameCategory.Top)) {
        return GameCategory.Top;
      } else if (game.categories.find((c) => c === GameCategory.New)) {
        return GameCategory.New;
      } else {
        return null;
      }
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

      this.category = this.getCategoryFromGame(this.game);
    }
  }
}
