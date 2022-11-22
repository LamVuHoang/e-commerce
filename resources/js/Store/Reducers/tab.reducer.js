import { tabConstants } from "../Constants";

const initState = {
    tabName: tabConstants.LOGIN_TAB,
    tabStatus: false
}

const tabReducer = (state = initState, action) => {
    switch (action.type) {

        case tabConstants.CHANGE_TAB_NAME:
            return {
                ...state,
                tabName: action.payload
            }
            break;

        // Tab Status
        case tabConstants.CHANGE_TAB_STATUS:
            return {
                ...state,
                tabStatus: action.payload
            }
            break
        default:
            return state;
            break;
    }
}

export default tabReducer