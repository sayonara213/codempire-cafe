import { IIngredient } from './types.ingredient';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: number;
  ingredients: IIngredient[];
}
