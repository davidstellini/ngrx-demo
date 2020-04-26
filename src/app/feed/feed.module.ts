import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducers } from './store/reducer';
import { feedEffects } from './store/effect';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [FeedListComponent, FeedItemComponent],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature(feedEffects),
  ],
  exports: [FeedListComponent],
})
export class FeedModule {}
