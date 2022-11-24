import { bannerConstants } from "../Constants";
import Action from "../Type/action.type";

const initState = {
    bannerList: [],
};

const bannerReducer = (state = initState, action: Action) => {
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
