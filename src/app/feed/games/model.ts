export interface Game {
  categories: GameCategoryEnum[];
  name: string;
  image: string;
  id: string;
}

export enum GameCategoryEnum {
  Top = 'top',
  Slots = 'slots',
  New = 'new',
}
