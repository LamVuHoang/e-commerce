import { combineReducers } from "redux";
// import Action from "../../Type/Action.type";
import authenticationReducer from "./authentication.reducer";
import bannerReducer from "./banner.reducer";
import tabReducer from "./tab.reducer";

const appReducer = combineReducers({
    authenticationReducer,
    bannerReducer,
    tabReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
