import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducers } from './store/reducer';
import { feedEffects } from './store/effect';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature(feedEffects),
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
