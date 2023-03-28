import { IsNotEmpty, IsString, IsArray, IsISO8601 } from 'class-validator';

export interface IOrderItem {
  itemId: string;
  quantity: number;
  isProduct: boolean;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public addressId: string;

  @IsArray()
  @IsNotEmpty()
  public itemIds: IOrderItem[];

  public stars: number;

  @IsString()
  public comment: string;

  @IsISO8601()
  public deliveryDate: Date;
}
