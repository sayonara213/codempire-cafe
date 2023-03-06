import { IsNotEmpty, IsString } from 'class-validator';

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
}
