import React, { useEffect } from 'react';

import * as Styled from './order-list.styled';
import { MainContainer } from '../main/main.styled';
import Button from './../global/Button/button';
import GlobalSorting from './../global/Sorting/sorting';
import { ItemWrap } from '../user-info/profile.styled';
import { IOrder, IOrderList } from '../../types/types.order';
import { useOrderListState } from './order-list.state';
import { ModalWrap } from './../modals/modal.styled';
import ActiveOrderModal from './../modals/order-modal/completed-order-modal/active-order-modal';
import GlobalModal from '../modals/modal';

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
          <Button type={undefined} isActive={isCompleted} onClick={handleCompleted}>
            COMPLETED
          </Button>
        </Styled.HeaderButtonWrap>
        <GlobalSorting options={options} defaultValue={options[0]} onChange={onOptionSelect} />
      </Styled.OrderListHeader>
      <Styled.OrderListBody>
        {orders.map((item: IOrderList) => (
          <Styled.OrderSectionWrap key={item.date.toLocaleDateString()}>
            <Styled.OrderSectionHeader>
              <Styled.OrderSectionHeaderTitle>
                {item.date.toLocaleDateString()}
              </Styled.OrderSectionHeaderTitle>
            </Styled.OrderSectionHeader>
            <Styled.OrderSectionBody>
              {item.orders.map((order: IOrder) => (
                <ItemWrap key={order.id} onClick={() => setOrderModalId(order.id)}>
                  <Styled.ItemParamWrap>
                    <Styled.ItemId>{order.id.slice(-5).toUpperCase()}</Styled.ItemId>
                    <Styled.ItemTime>
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </Styled.ItemTime>
                  </Styled.ItemParamWrap>
                  <Styled.ItemItemsList>
                    {[
                      ...order.orderMenus.map((item) => item.menu.name),
                      ...order.orderProducts.map((item) => item.product.name),
                    ].join(', ')}
                  </Styled.ItemItemsList>
                </ItemWrap>
              ))}
            </Styled.OrderSectionBody>
          </Styled.OrderSectionWrap>
        ))}
      </Styled.OrderListBody>
    </MainContainer>
  );
};

export default OrderList;
