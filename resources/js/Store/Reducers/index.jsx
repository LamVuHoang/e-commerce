import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import bannerReducer from "./banner.reducer";

const appReducer = combineReducers({
    userReducer,
    bannerReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
