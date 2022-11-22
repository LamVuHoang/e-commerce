import { authenticationConstants, exceptionConstants } from "../Constants";
import authenticationService from "../Services/authentication.service";

export const getUserInfo = () => {
    return async (dispatch) => {
        const response = await authenticationService.getUserInfo();
        if (response.code === exceptionConstants.SUCCESS) {
            dispatch({
                type: authenticationConstants.GET_USER_INFO,
                payload: {
                    data: response.data,
                },
            });
        }
        return response;
    };
};

export const logInUser = (data) => {
    return async (dispatch) => {
        const response = await authenticationService.logInUser(data);
        dispatch({
            type: authenticationConstants.LOGIN_USER,
            payload: {
                data: response.data,
                message: response.message,
                code: response.code,
            },
        });
    };
};

export const signUpUser = (data) => {
    return async (dispatch) => {
        const response = await authenticationService.signUpUser(data);
        dispatch({
            type: authenticationConstants.SIGNUP_USER,
            payload: {
                data: response.data,
                message: response.message,
                code: response.code,
            },
        });
    };
};

export const changeLoginStatus = (value) => {
    return async (dispatch) => {
        dispatch({
            type: authenticationConstants.CHANGE_LOGIN_STATUS,
            payload: value,
        });
    };
};
