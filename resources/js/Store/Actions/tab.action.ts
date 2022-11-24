import { tabConstants } from "../Constants";

export const changeTabStatus = (value: boolean) => {
    return async (dispatch: Function) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_STATUS,
            payload: value,
        });
    };
};

export const changeTabName = (tabName: string) => {
    return async (dispatch: Function) => {
        dispatch({
            type: tabConstants.CHANGE_TAB_NAME,
            payload: tabName,
        });
    };
};
