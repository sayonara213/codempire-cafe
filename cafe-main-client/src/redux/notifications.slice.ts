import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INotification } from '../types/types.notification';

const initialState = {
  notificationsList: [] as INotification[],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      state.notificationsList.unshift(action.payload);
    },
    setNotifications: (state, action: PayloadAction<INotification[]>) => {
      state.notificationsList = action.payload;
    },
    setNotificationRead: (state, action: PayloadAction<string>) => {
      const notification = state.notificationsList.find(
        (notification) => notification.id === action.payload,
      );
      if (notification) {
        notification.isSeen = true;
      }
    },
  },
});

export default notificationsSlice.reducer;

export const { addNotification, setNotifications, setNotificationRead } =
  notificationsSlice.actions;
