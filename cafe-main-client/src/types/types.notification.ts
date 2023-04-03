import { IOrder } from './types.order';

export interface INotification {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  order: IOrder;
  isSeen: boolean;
  isAdmin: boolean;
}
