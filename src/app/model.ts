import { FeedState } from './feed/store/reducer';

export interface StateSlice<K> {
  data: K[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export interface GlobalState {
  feed: FeedState;
}
