import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { ISelectAddress } from '../../../../types/types.address';
import * as Styled from './check-order-modal.styled';
import Button from './../../../global/Button/button';
import { API_URL } from '../../../../constants/url';
import { apiPost } from '../../../../services/api.service';
import { errorToast } from '../../../../notifications/notifications';
import { successToast } from './../../../../notifications/notifications';
import { clearCart } from '../../../../redux/cart.slice';

interface CheckOrderModalProps {
  address: ISelectAddress;
  date: Date;
  comment: string;
  closeModal: () => void;
}

const CheckOrderModal: React.FC<CheckOrderModalProps> = ({
  address,
  date,
  comment,
  closeModal,
}) => {
  const user = useAppSelector((store) => store.user);
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const orderInfo = [
    {
      title: 'User information',
      data: [
        {
          title: 'Name',
          value: user.name,
        },
        {
          title: 'Phone',
          value: user.phone,
        },
        {
          title: 'Address',
          value: address.name,
        },
      ],
    },
    {
      title: 'Delivery information',
      data: [
        {
          title: 'Date',
          value: date.toLocaleDateString(),
        },
        {
          title: 'Time',
          value: date.toLocaleTimeString(),
        },
        {
          title: 'Comment',
          value: comment || 'No comment',
        },
      ],
    },
  ];

  const createOrder = async () => {
    const order = {
      userId: user.id,
      itemIds: cartItems.map(({ price, ...item }) => item),
      addressId: address.id,
      deliveryDate: date.toISOString(),
      comment: comment,
    };
    try {
      const res = await apiPost(API_URL.CREATE_ORDER, order);
      const orderId = res.data.id.toString().slice(-5).toUpperCase();
      closeModal();
      dispatch(clearCart());
      successToast(`Order ${orderId} created successfully!`);
    } catch {
      errorToast('Failed to create order');
    }
  };

  return (
    <Styled.CheckOrderWrap>
      {orderInfo.map((info) => (
        <Styled.CheckOrderSection key={info.title}>
          <Styled.CheckOrderTitle>{info.title}</Styled.CheckOrderTitle>
          {info.data.map((data) => (
            <Styled.CheckOrderData key={data.title}>
              <Styled.CheckOrderSubTitle>{data.title}</Styled.CheckOrderSubTitle>
              <Styled.CheckOrderText>{data.value}</Styled.CheckOrderText>
            </Styled.CheckOrderData>
          ))}
        </Styled.CheckOrderSection>
      ))}
      <Styled.CheckOrderButtonsWrap>
        <Button type={'button'} isActive isCancel>
          Cancel
        </Button>
        <Button type={'button'} isActive onClick={createOrder}>
          Order
        </Button>
      </Styled.CheckOrderButtonsWrap>
    </Styled.CheckOrderWrap>
  );
};

export default CheckOrderModal;
