import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/types.user';

interface UserState {
    user: IUser;
}

export const initialState: UserState = {
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        role: '',
        createdAt: new Date(),
        updatedAt: new Date()
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

