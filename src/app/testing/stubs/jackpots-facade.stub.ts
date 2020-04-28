import { BehaviorSubject } from 'rxjs';
import { Jackpot } from '../../feed/jackpots/model';

export class JackpotsFacadeStub {
  jackpotsSubj$ = new BehaviorSubject<Jackpot[]>([]);
  jackpots$ = this.jackpotsSubj$.asObservable();
  fetchJackpots = () => this.jackpots$;
}
