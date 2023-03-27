import { IsNotEmpty, IsString, IsArray, IsDate } from 'class-validator';

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

  public comment: string;

  public deliveryDate: Date;
}
