import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedItemComponent } from './feed-item.component';
import { GameWithJackpot } from '../store/selector';
import { GameCategory } from '../games/model';

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show jackpot if game has jackpot amount', () => {
    component.game = { jackpotAmount: 123 } as GameWithJackpot;

    expect(component.showJackpot()).toBe(true);
  });

  it('should hide jackpot if game has no jackpot amount', () => {
    component.game = { jackpotAmount: null } as GameWithJackpot;

    expect(component.showJackpot()).toBe(false);
  });

  it('should return ribbon category from game', () => {
    const game = { categories: [GameCategory.Top] } as GameWithJackpot;

    expect(component.getRibbonCategoryFromGame(game)).toBe(GameCategory.Top);
  });

  it('should return null if game has no top or new category', () => {
    const game = { categories: [GameCategory.Slots] } as GameWithJackpot;

    expect(component.getRibbonCategoryFromGame(game)).toBe(null);
  });

  it('should return null if game has no categories', () => {
    const game = { categories: null } as GameWithJackpot;

    expect(component.getRibbonCategoryFromGame(game)).toBe(null);
  });
});
