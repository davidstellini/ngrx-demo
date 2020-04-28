export interface Game {
  categories: GameCategory[];
  name: string;
  image: string;
  id: string;
}
export enum GameCategory {
  Top = 'top',
  Slots = 'slots',
  New = 'new',
  Classic = 'classic',
  Poker = 'poker',
  Roulette = 'roulette',
  Blackjack = 'blackjack',
  Fun = 'fun',
  Virtual = 'virtual',
  Ball = 'ball',
}
