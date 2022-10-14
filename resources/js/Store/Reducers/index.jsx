import { combineReducers } from "redux";
import userReducer from "./userReducer/index.jsx";

const appReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
