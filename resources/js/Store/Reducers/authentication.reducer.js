import { authenticationConstants } from "../Constants";

const initState = {
    logInStatus: window.localStorage.getItem("token") ? true : false,
    userInfo: [],
    logInResult: [],
    signUpResult: [],
    logOutResult: [],
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
                logInResult: action.payload,
            };
            break;
        case authenticationConstants.SIGNUP_USER:
            return {
                ...state,
                signUpResult: action.payload,
            };
            break;
        case authenticationConstants.CHANGE_LOGIN_STATUS:
            return {
                ...state,
                logInStatus: action.payload,
            };
            break;
        case authenticationConstants.LOGOUT_USER:
            return {
                ...state,
                logOutResult: action.payload,
            };
            break;
        default:
            return state;
            break;
    }
};

export default authenticationReducer;
