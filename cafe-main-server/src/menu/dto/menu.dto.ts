import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/product/entity/product.entity';

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public weight: number;

  @IsString()
  @IsNotEmpty()
  public image: string;

  @IsNotEmpty()
  @IsArray()
  products: string[];

  @IsNotEmpty()
  @IsArray()
  allergens: string[];
}
