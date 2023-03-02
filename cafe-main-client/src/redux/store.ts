import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";

const rootReducer = combineReducers({
    user: userSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;
