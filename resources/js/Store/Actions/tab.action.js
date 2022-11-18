import { tabConstants } from "../Constants";

export const changeTabStatus = () => {
    return async (dispatch) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_STATUS,
        })
    }
};

export const changeTabName = (tabName) => {
    return async (dispatch) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_NAME,
            payload: tabName
        })
    }
};