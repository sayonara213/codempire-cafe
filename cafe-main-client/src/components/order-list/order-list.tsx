import React, { useEffect } from 'react';

import * as Styled from './order-list.styled';
import { MainContainer } from '../main/main.styled';
import Button from './../global/Button/button';
import GlobalSorting from './../global/Sorting/sorting';
import { IOrderList } from '../../types/types.order';
import { useOrderListState } from './order-list.state';
import ActiveOrderModal from './../modals/order-modal/completed-order-modal/active-order-modal';
import GlobalModal from '../modals/modal';
import OrderListItem from './order-list-item/order-list-item';

const OrderList: React.FC = () => {
  const {
    fetchOrders,
    handleCompleted,
    handleWaiting,
    isCompleted,
    onOptionSelect,
    options,
    orders,
    sortBy,
    orderModalId,
    setOrderModalId,
    handleSetOrderModalId,
  } = useOrderListState();

  useEffect(() => {
    fetchOrders();
  }, [isCompleted, sortBy]);

  return (
    <MainContainer>
      {orderModalId.length > 0 && (
        <GlobalModal
          isOpen={orderModalId.length !== 0}
          onChange={setOrderModalId}
          modalName={orderModalId.slice(-5).toUpperCase()}>
          <ActiveOrderModal orderId={orderModalId} />
        </GlobalModal>
      )}
      <Styled.OrderListHeader>
        <Styled.HeaderButtonWrap>
          <Button type={'button'} isActive={!isCompleted} onClick={handleWaiting}>
            WAITING
          </Button>
          <Button type={'button'} isActive={isCompleted} onClick={handleCompleted}>
            COMPLETED
          </Button>
        </Styled.HeaderButtonWrap>
        <GlobalSorting options={options} defaultValue={options[0]} onChange={onOptionSelect} />
      </Styled.OrderListHeader>
      <Styled.OrderListBody>
        {orders.map((item: IOrderList) => (
          <OrderListItem
            item={item}
            handleSetOrderModalId={handleSetOrderModalId}
            key={item.date.toLocaleDateString()}
          />
        ))}
      </Styled.OrderListBody>
    </MainContainer>
  );
};

export default OrderList;
