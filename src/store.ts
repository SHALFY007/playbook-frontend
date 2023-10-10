import { configureStore } from "@reduxjs/toolkit";
import {authUser} from './store/authSlice'
import authSlice from "./store/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store