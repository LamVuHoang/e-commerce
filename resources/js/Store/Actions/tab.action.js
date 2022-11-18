import { tabConstants } from "../Constants";

export const changeTabStatus = () => {
    return async (dispatch) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_STATUS,
        })
    }
};
