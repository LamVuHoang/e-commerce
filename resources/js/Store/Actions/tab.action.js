import { tabConstants } from "../Constants";

export const changeTabStatus = (value) => {
    return async (dispatch) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_STATUS,
            payload: value
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