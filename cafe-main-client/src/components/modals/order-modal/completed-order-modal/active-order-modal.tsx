import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../constants/url';
import { apiGet, apiUpdate } from '../../../../services/api.service';
import * as Styled from '../check-order-modal/check-order-modal.styled';
import { IOrder, IOrderData, OrderStatus } from './../../../../types/types.order';
import ProgressBar from './progress-bar/progress-bar';
import Button from './../../../global/Button/button';
import StarsRating from './stars/stars';
import { errorToast, successToast } from './../../../../notifications/notifications';
import { useAppSelector } from '../../../../hooks/hooks';

interface ActiveOrderModalProps {
  orderId: string;
}

const ActiveOrderModal: React.FC<ActiveOrderModalProps> = ({ orderId }) => {
  const user = useAppSelector((store) => store.user);
  const [orderInfo, setOrderInfo] = useState<IOrder>({} as IOrder);
  const [stars, setStars] = useState(0);

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

  useEffect(() => {
    setStars(orderInfo.stars);
  }, [orderInfo.stars]);

  const onSubmit = async () => {
    if (orderInfo.status === OrderStatus.DELIVERED && orderInfo.stars === null) {
      try {
        await apiUpdate(API_URL.RATE_ORDER, orderId, { stars: stars });
        successToast("You've successfully rated the order");
      } catch (err) {
        errorToast('Rating failed');
      }
    }
  };

  const confirmOrder = async () => {
    try {
      await apiUpdate(API_URL.CONFIRM_ORDER, orderId, { status: OrderStatus.READY });
      successToast("You've successfully confirmed the order");
    } catch {
      errorToast('Confirm failed');
    }
  };

  const cancelOrder = async () => {
    try {
      await apiUpdate(API_URL.CONFIRM_ORDER, orderId, { status: OrderStatus.CANCELED });
      successToast("You've successfully canceled the order");
    } catch {
      errorToast('Cancel failed');
    }
  };

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
        {user.role === 'admin' && orderInfo.status === OrderStatus.CREATED ? (
          <>
            <Button type={'button'} isActive isCancel={true} onClick={cancelOrder}>
              CANCEL
            </Button>
            <Button type={'button'} isActive onClick={confirmOrder}>
              CONFIRM
            </Button>
          </>
        ) : (
          <>
            {orderInfo.status === OrderStatus.DELIVERED ? (
              <StarsRating
                stars={stars}
                setStars={setStars}
                canBeChanged={orderInfo.stars === null}
              />
            ) : (
              <ProgressBar progress={orderInfo.status} />
            )}
            <Styled.CheckOrderButtonWrap>
              <Button type={'button'} isActive onClick={onSubmit}>
                Done
              </Button>
            </Styled.CheckOrderButtonWrap>
          </>
        )}
      </Styled.CheckOrderButtonsWrap>
    </Styled.CheckOrderWrap>
  );
};

export default ActiveOrderModal;
