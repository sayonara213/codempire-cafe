import { IAllergen } from "./types.allergens";
import { IProduct } from "./types.products";

export interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  products: IProduct[];
  allergens: IAllergen[];
}
