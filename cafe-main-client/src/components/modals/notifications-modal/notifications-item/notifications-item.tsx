import React from 'react';
import { INotification } from '../../../../types/types.notification';
import * as Styled from '../../../order-list/order-list-item/order-list-item.styled';
import NotificationsField from './notifications-field/notifications-field';

interface NotificationsItemProps {
  date: Date;
  notifications: INotification[];
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({ date, notifications }) => {
  return (
    <Styled.OrderSectionWrap>
      <Styled.OrderSectionHeader>
        <Styled.OrderSectionHeaderTitle>{date.toLocaleDateString()}</Styled.OrderSectionHeaderTitle>
      </Styled.OrderSectionHeader>
      <Styled.OrderSectionBody>
        {notifications.map((notification) => (
          <NotificationsField notification={notification} key={notification.id} />
        ))}
      </Styled.OrderSectionBody>
    </Styled.OrderSectionWrap>
  );
};

export default NotificationsItem;
