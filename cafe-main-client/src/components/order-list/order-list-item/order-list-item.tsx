import React from 'react';
import { IOrderList } from '../../../types/types.order';
import OrderItemField from './order-item-field/order-item-field';
import * as Styled from './order-list-item.styled';

interface OrderListItemProps {
  item: IOrderList;
  handleSetOrderModalId: (id: string) => void;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ item, handleSetOrderModalId }) => {
  return (
    <Styled.OrderSectionWrap>
      <Styled.OrderSectionHeader>
        <Styled.OrderSectionHeaderTitle>
          {item.date.toLocaleDateString()}
        </Styled.OrderSectionHeaderTitle>
      </Styled.OrderSectionHeader>
      <Styled.OrderSectionBody>
        {item.orders.map((order) => (
          <OrderItemField
            order={order}
            handleSetOrderModalId={handleSetOrderModalId}
            key={order.id}
          />
        ))}
      </Styled.OrderSectionBody>
    </Styled.OrderSectionWrap>
  );
};

export default OrderListItem;
