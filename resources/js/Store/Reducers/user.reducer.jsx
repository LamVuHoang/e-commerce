import { userConstants } from "../Constants";

const initState = {
    userInfo: [],
    newToken: []
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload.data,
            };
        case userConstants.LOGIN_USER:
            return {
                ...state,
                newToken: action.payload.data,
            }
        default:
            return state;
    }
};

export default userReducer;
