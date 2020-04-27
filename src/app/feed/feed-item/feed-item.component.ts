import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Game } from '../games/model';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit, OnChanges {
  public imgError = false;

  @Input() game?: Game = null;
  private _backgroundImageUrl: SafeUrl;
  public get backgroundImageUrl() {
    return this._backgroundImageUrl;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.game) {
      const game = changes.game.currentValue as Game;

      this._backgroundImageUrl = this.sanitizer.bypassSecurityTrustUrl(
        game.image
      );
    }
  }
}
