import { userConstants } from "../Constants";

const initState = {
    userInfo: [],
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload.data,
            };
        default:
            return state;
    }
};

export default userReducer;
