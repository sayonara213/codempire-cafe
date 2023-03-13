import { IAllergen } from './types.allergens';
import { IIngredient } from './types.ingredient';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  weight: number;
  ingredients: IIngredient[];
}
