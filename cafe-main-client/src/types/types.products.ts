import { IIngredient } from './types.ingredient';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  type: string;
  weight: number;
  ingredients: IIngredient[];
}

export const productTypes = [
  'pizza',
  'salad',
  'drink',
  'dessert',
  'burger',
  'juice',
  'sandwich',
  'soup',
  'tea',
  'coffee',
  'other',
];
