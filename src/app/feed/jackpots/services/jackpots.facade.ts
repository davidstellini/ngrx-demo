import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectJackpots } from '../store/selector';
import { fetchJackpots } from '../store/action';
import { GlobalState } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class JackpotsFacade {
  jackpots$ = this.store.select(selectJackpots);

  constructor(private store: Store<GlobalState>) {}

  fetchJackpots() {
    this.store.dispatch(fetchJackpots());
    return this.jackpots$;
  }
}
