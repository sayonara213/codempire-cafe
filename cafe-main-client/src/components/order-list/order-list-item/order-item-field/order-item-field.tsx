import React from 'react';
import { IOrder } from '../../../../types/types.order';
import { ItemWrap } from '../../../user-info/profile.styled';
import * as Styled from './order-item-field.styled';

interface OrderItemFieldProps {
  order: IOrder;
  handleSetOrderModalId: (id: string) => void;
}

const OrderItemField: React.FC<OrderItemFieldProps> = ({ order, handleSetOrderModalId }) => {
  const handleClick = () => {
    handleSetOrderModalId(order.id);
  };

  return (
    <ItemWrap key={order.id} onClick={handleClick}>
      <Styled.ItemParamWrap>
        <Styled.ItemId>{order.id.slice(-5).toUpperCase()}</Styled.ItemId>
        <Styled.ItemTime>
          {new Date(order.createdAt).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Styled.ItemTime>
      </Styled.ItemParamWrap>
      <Styled.ItemItemsList>
        {[
          ...order.orderMenus.map((item) => item.menu.name),
          ...order.orderProducts.map((item) => item.product.name),
        ].join(', ')}
      </Styled.ItemItemsList>
    </ItemWrap>
  );
};

export default OrderItemField;
