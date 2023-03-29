import { IAddress } from './types.user';
import { IProduct } from './types.products';
import { IMenu } from './types.menu';

export enum OrderStatus {
  CREATED = 'created',
  READY = 'ready',
  ON_WAY = 'onWay',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

export interface IOrder {
  id: string;
  status: OrderStatus;
  createdAt: string;
  deliveryDate: string;
  comment: string;
  stars: number;
  address: IAddress;
  orderProducts: [
    {
      id: number;
      quantity: number;
      product: IProduct;
    },
  ];
  orderMenus: [
    {
      id: number;
      quantity: number;
      menu: IMenu;
    },
  ];
  user: {
    id: string;
    name: string;
    phone: string;
  };
}

export interface IOrderList {
  date: Date;
  orders: IOrder[];
}

export interface IOrderData {
  title: string;
  value: string;
}
