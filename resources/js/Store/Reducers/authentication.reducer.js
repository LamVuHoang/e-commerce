import { authenticationConstants } from "../Constants";

const initState = {
    logInStatus: false,
    userInfo: [],
    newToken: [],
};

const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case authenticationConstants.GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload.data,
            };
            break;
        case authenticationConstants.LOGIN_USER:
            return {
                ...state,
                newToken: action.payload.data,
            };
            break;
        case authenticationConstants.LOGIN_ACTION:
            return {
                ...state,
                logInStatus: true,
            };
            break;
        case authenticationConstants.LOGOUT_ACTION:
            return {
                ...state,
                logInStatus: false,
            };
        default:
            return state;
            break;
    }
};

export default authenticationReducer;
