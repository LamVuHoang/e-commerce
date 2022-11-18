import { tabConstants } from "../Constants";

const initState = {
    tabName: tabConstants.LOGIN_TAB,
    tabStatus: false
}

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case tabConstants.LOGIN_TAB:
            return {
                ...state,
                tabName: action.type
            }
            break;

        // Tab Status
        case tabConstants.CHANGE_TAB_STATUS:
            return {
                ...state,
                tabStatus: !state.tabStatus
            }
        default:
            return state;
            break;
    }
}

export default tabReducer