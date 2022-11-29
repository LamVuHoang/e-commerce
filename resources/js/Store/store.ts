import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Reducers/authentication.reducer";
import bannerReducer from "./Reducers/banner.reducer";
import tabReducer from "./Reducers/tab.reducer";

const store = configureStore({
    reducer: {
        authenticationReducer,
        bannerReducer,
        tabReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
