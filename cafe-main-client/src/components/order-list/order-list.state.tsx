import { useState } from 'react';
import { API_URL } from '../../constants/url';
import { useAppSelector } from '../../hooks/hooks';
import { apiGet } from '../../services/api.service';
import { IOrder, IOrderList } from '../../types/types.order';

export const useOrderListState = () => {
  const options = [
    { value: 'asc', label: 'Date Old' },
    { value: 'desc', label: 'Date New' },
  ];

  const [isCompleted, setIsCompleted] = useState(false);
  const [orders, setOrders] = useState<IOrderList[]>([]);
  const [sortBy, setSortBy] = useState(options[0].value);
  const [orderModalId, setOrderModalId] = useState<string>('');
  const user = useAppSelector((store) => store.user);

  const sortOrders = (fetchedOrders: IOrder[]) => {
    return fetchedOrders.sort((a: IOrder, b: IOrder) => {
      if (sortBy === 'asc') {
        return new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime();
      } else {
        return new Date(b.deliveryDate).getTime() - new Date(a.deliveryDate).getTime();
      }
    });
  };

  const ordersByDate = (fetchedOrders: IOrder[]) => {
    const sortedOrders = sortOrders(fetchedOrders);
    return sortedOrders.reduce((acc: IOrderList[], order: IOrder) => {
      const date = new Date(order.deliveryDate);
      date.setHours(0, 0, 0, 0);
      const dateExists = acc.some((item: IOrderList) => item.date.getTime() === date.getTime());
      if (dateExists) {
        acc.forEach((item: IOrderList) => {
          if (item.date.getTime() === date.getTime()) {
            item.orders.push(order);
          }
        });
      } else {
        acc.push({ date, orders: [order] });
      }
      return acc;
    }, []);
  };

  const onOptionSelect = (option: any) => {
    setSortBy(option.value);
  };

  const filterOrders = (fetchedOrders: IOrder[]) => {
    if (isCompleted) {
      return fetchedOrders.filter((order: IOrder) => order.status === 'delivered');
    } else {
      return fetchedOrders.filter((order: IOrder) => order.status !== 'delivered');
    }
  };

  const fetchOrders = async () => {
    const res =
      user.role === 'user'
        ? await apiGet(API_URL.GET_ORDERS_LIST + user.id)
        : await apiGet(API_URL.GET_ORDERS_LIST);
    const filteredOrders = filterOrders(res.data);
    const splitedOrders = ordersByDate(filteredOrders);
    setOrders(splitedOrders);
  };

  const handleSetOrderModalId = (id: string) => {
    setOrderModalId(id);
  };

  const handleCompleted = () => {
    setIsCompleted(true);
  };

  const handleWaiting = () => {
    setIsCompleted(false);
  };

  return {
    isCompleted,
    orders,
    sortBy,
    options,
    onOptionSelect,
    fetchOrders,
    handleCompleted,
    handleWaiting,
    orderModalId,
    setOrderModalId,
    handleSetOrderModalId,
  };
};
