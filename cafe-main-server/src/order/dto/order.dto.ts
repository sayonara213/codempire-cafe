import { IsNotEmpty, IsString, IsArray } from 'class-validator';

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
  public itemIds: IOrderItem[];
}
