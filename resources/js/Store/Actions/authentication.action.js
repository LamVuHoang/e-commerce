import { authenticationConstants, exceptionConstants } from "../Constants";
import authenticationService from "../Services/authentication.service";
const noAvatar =
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-111_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce2cd03f94f2baddcb332cfb50f78b9";

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
        const response = await authenticationService.logInUser(data)
        if(response.code === exceptionConstants.SUCCESS ||
            response.code === exceptionConstants.CREATED) {
            dispatch({
                type: authenticationConstants.LOGIN_USER,
                payload: {
                    data: response.data
                }
            })
        }
    }
}


export const logInAction = () => {
    return async (dispatch) => {
        dispatch({
            type: authenticationConstants.LOGIN_ACTION,
        })
    }
}

export const logOutAction = () => {
    return async (dispatch) => {
        dispatch({
            type: authenticationConstants.LOGOUT_ACTION,
        })
    }
}