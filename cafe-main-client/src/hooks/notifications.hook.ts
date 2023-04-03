import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotification, setNotifications } from '../redux/notifications.slice';
import { useAppSelector } from './hooks';
import { API_URL } from '../constants/url';
import { apiGet } from '../services/api.service';
import { UserRole } from '../types/types.user';

const useNotifications = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const [lastEventDate, setLastEventDate] = useState(null);
  const [initialFetched, setInitialFetched] = useState<boolean>(false);

  const fetchNotifications = async () => {
    const response =
      user.role === UserRole.ADMIN
        ? await apiGet(API_URL.GET_ADMIN_NOTIFICATIONS)
        : await apiGet(API_URL.GET_NOTIFICATIONS + user.id);
    dispatch(setNotifications(response.data));
    setLastEventDate(response.data[0].createdAt);
    setInitialFetched(true);
  };

  useEffect(() => {
    if (user && !initialFetched) {
      fetchNotifications();
    }
  }, [user, initialFetched]);

  useEffect(() => {
    if (!initialFetched) return;
    const eventSource = new EventSource(
      user.role === UserRole.ADMIN
        ? `${API_URL.GET_ADMIN_SSE}?lastEventDate=${lastEventDate}`
        : `${API_URL.GET_USER_SSE}/${user.id}?lastEventDate=${lastEventDate}`,
    );

    eventSource.onerror = () => {
      eventSource.close();
    };

    eventSource.onmessage = (payload: MessageEvent<string>) => {
      const newMessage = JSON.parse(payload.data);
      dispatch(addNotification(newMessage));
      setLastEventDate(newMessage.createdAt);
    };

    return () => {
      eventSource.close();
    };
  }, [dispatch, user, lastEventDate, initialFetched]);
};

export default useNotifications;
