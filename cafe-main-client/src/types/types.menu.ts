export interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  products?: string[];
  allergens?: string[];
}
