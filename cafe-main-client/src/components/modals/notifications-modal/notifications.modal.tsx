import React, { useEffect } from 'react';
import * as Styled from './notifications.modal.styled';
import { useAppSelector } from '../../../hooks/hooks';
import NotificationsItem from './notifications-item/notifications-item';
import { INotification } from '../../../types/types.notification';

interface INotificationsList {
  date: Date;
  notifications: INotification[];
}

const NotificationsModal: React.FC = () => {
  const notifications = useAppSelector((state) => state.notifications.notificationsList);
  const [sortedNotifications, setSortedNotifications] = React.useState<INotificationsList[]>([]);

  const notificationsByDate = (fetchedNotifications: INotification[]) => {
    return fetchedNotifications.reduce((acc: INotificationsList[], notification: INotification) => {
      const date = new Date(notification.createdAt);
      date.setHours(0, 0, 0, 0);
      const dateExists = acc.some(
        (item: INotificationsList) => item.date.getTime() === date.getTime(),
      );
      if (dateExists) {
        acc.forEach((item: INotificationsList) => {
          if (item.date.getTime() === date.getTime()) {
            item.notifications.push(notification);
          }
        });
      } else {
        acc.push({ date, notifications: [notification] });
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    setSortedNotifications(notificationsByDate(notifications));
  }, [notifications]);

  return (
    <Styled.NotificationsModalWrap>
      <Styled.NotificationsModalBody>
        {sortedNotifications.map((item) => (
          <NotificationsItem
            date={item.date}
            notifications={item.notifications}
            key={item.date.toLocaleDateString()}
          />
        ))}
      </Styled.NotificationsModalBody>
      <Styled.NotificationsModalFooter></Styled.NotificationsModalFooter>
    </Styled.NotificationsModalWrap>
  );
};

export default NotificationsModal;
