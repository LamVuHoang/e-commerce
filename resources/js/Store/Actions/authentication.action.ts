import { authenticationConstants, exceptionConstants } from "../Constants";
import authenticationService from "../Services/authentication.service";

export const getUserInfo = () => {
    return async (dispatch: Function) => {
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

export const logInUser = (data: { username: string; password: string }) => {
    return async (dispatch: Function) => {
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

export const signUpUser = (data: {
    username: string;
    password: string;
    password_confirmation: string;
}) => {
    return async (dispatch: Function) => {
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

export const logOutUser = () => {
    return async (dispatch: Function) => {
        const response = await authenticationService.logOutUser();
        dispatch({
            type: authenticationConstants.LOGOUT_USER,
            payload: {
                data: response.data,
                message: response.message,
                code: response.code,
            },
        });
    };
};

export const changeLoginStatus = (value: boolean) => {
    return async (dispatch: Function) => {
        dispatch({
            type: authenticationConstants.CHANGE_LOGIN_STATUS,
            payload: value,
        });
    };
};
