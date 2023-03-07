import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsArray()
  @IsNotEmpty()
  public allergens: string[];
}
