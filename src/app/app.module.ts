import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FeedModule } from './feed/feed.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // todo: Add devtools only for dev.
    StoreDevtoolsModule.instrument(),

    FeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
