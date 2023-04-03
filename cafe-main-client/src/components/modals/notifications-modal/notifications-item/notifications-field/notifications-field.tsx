import React from 'react';
import { INotification } from '../../../../../types/types.notification';
import * as Styled from '../../../../order-list/order-list-item/order-item-field/order-item-field.styled';

import { ItemWrap } from '../../../../user-info/profile.styled';
import { useNavigate } from 'react-router-dom';
import { apiUpdate } from '../../../../../services/api.service';
import { API_URL } from '../../../../../constants/url';
import { useAppDispatch } from './../../../../../hooks/hooks';
import { setNotificationRead } from '../../../../../redux/notifications.slice';
import { ROUTES } from './../../../../../constants/routes';
import { OrderStatus } from '../../../../../types/types.order';

interface NotificationsFieldProps {
  notification: INotification;
}

const NotificationsField: React.FC<NotificationsFieldProps> = ({ notification }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const setNotificationSeen = () => {
    if (!notification.isSeen) {
      apiUpdate(API_URL.SET_NOTIFICATION_AS_READ, notification.id, { isSeen: true });
      dispatch(setNotificationRead(notification.id));
    }
    navigate(ROUTES.orders);
  };

  const getStatus = (status: string) => {
    switch (status) {
      case OrderStatus.READY:
        return 'Order is confirmed';
      case OrderStatus.ON_WAY:
        return 'Order is on the way';
      case OrderStatus.DELIVERED:
        return 'Order is delivered';
      case OrderStatus.CANCELED:
        return 'Order is canceled';
      default:
        return 'New order';
    }
  };

  return (
    <ItemWrap key={notification.id} onClick={setNotificationSeen}>
      <Styled.StateWrap>
        {notification.isSeen === false && <Styled.State />}
        <Styled.ItemParamWrap>
          <Styled.ItemId>{notification.order.id.slice(-5).toUpperCase()}</Styled.ItemId>
          <Styled.ItemTime>
            {new Date(notification.createdAt).toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Styled.ItemTime>
        </Styled.ItemParamWrap>
        <Styled.ItemItemsList>{getStatus(notification.order.status)}</Styled.ItemItemsList>
      </Styled.StateWrap>
    </ItemWrap>
  );
};

export default NotificationsField;
