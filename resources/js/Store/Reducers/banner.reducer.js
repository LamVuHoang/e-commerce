import { bannerConstants } from "../Constants";

const initState = {
    bannerList: [],
};

const bannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerConstants.GET_ALL_BANNER:
            return {
                ...state,
                bannerList: action.payload.data,
            };
            break;
        default:
            return state;
            break;
    }
};

export default bannerReducer;
