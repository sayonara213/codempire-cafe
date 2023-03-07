import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateProductDto {
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
  public image: string;

  @IsArray()
  public ingredients: string[];
}
