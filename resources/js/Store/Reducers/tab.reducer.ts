import { createSlice } from "@reduxjs/toolkit";
import { tabConstants } from "../Constants";
interface TabState {
    tabName: string;
    authenTabStatus: boolean;
}

const initState = {
    tabName: tabConstants.SIGNIN_TAB,
    authenTabStatus: false,
} as TabState;

const tabSlice = createSlice({
    name: "tab",
    initialState: initState,
    reducers: {
        changeTabName(state, action) {
            state.tabName = action.payload;
        },
        changeAuthenTabStatus(state, action) {
            state.authenTabStatus = action.payload;
        },
        resetDefaultTab(state) {
            state.tabName = tabConstants.SIGNIN_TAB;
            state.authenTabStatus = false;
        },
    },
});

export const { changeTabName, changeAuthenTabStatus, resetDefaultTab } =
    tabSlice.actions;
    
export default tabSlice.reducer;
