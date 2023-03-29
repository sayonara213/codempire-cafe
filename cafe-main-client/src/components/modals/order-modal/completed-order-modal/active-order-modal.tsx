import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../constants/url';
import { apiGet } from '../../../../services/api.service';
import * as Styled from '../check-order-modal/check-order-modal.styled';
import { IOrder, IOrderData, OrderStatus } from './../../../../types/types.order';
import ProgressBar from './progress-bar/progress-bar';
import Button from './../../../global/Button/button';

interface ActiveOrderModalProps {
  orderId: string;
}

const ActiveOrderModal: React.FC<ActiveOrderModalProps> = ({ orderId }) => {
  const [orderInfo, setOrderInfo] = useState<IOrder>({} as IOrder);

  const displayOrderInfo =
    Object.keys(orderInfo).length > 0
      ? [
          {
            title: 'User information',
            data: [
              {
                title: 'Name',
                value: orderInfo.user.name,
              },
              {
                title: 'Phone',
                value: orderInfo.user.phone,
              },
              {
                title: 'Address',
                value: orderInfo.address.addressName,
              },
            ],
          },
          {
            title: 'Delivery information',
            data: [
              {
                title: 'Date',
                value: new Date(orderInfo.deliveryDate).toLocaleDateString(),
              },
            ],
          },
        ]
      : [];

  const fetchOrderInfo = async () => {
    const res = await apiGet(API_URL.GET_ORDER_BY_ID + orderId);
    setOrderInfo(res.data);
  };

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  return (
    <Styled.CheckOrderWrap>
      {displayOrderInfo.map((info) => (
        <Styled.CheckOrderSection key={info.title}>
          <Styled.CheckOrderTitle>{info.title}</Styled.CheckOrderTitle>
          {info.data.map((data: IOrderData) => (
            <Styled.CheckOrderData key={data.title}>
              <Styled.CheckOrderSubTitle>{data.title}</Styled.CheckOrderSubTitle>
              <Styled.CheckOrderText>{data.value}</Styled.CheckOrderText>
            </Styled.CheckOrderData>
          ))}
        </Styled.CheckOrderSection>
      ))}
      <Styled.CheckOrderButtonsWrap>
        <ProgressBar progress={orderInfo.status} />
        <Button type={'button'} isActive>
          Done
        </Button>
      </Styled.CheckOrderButtonsWrap>
    </Styled.CheckOrderWrap>
  );
};

export default ActiveOrderModal;
