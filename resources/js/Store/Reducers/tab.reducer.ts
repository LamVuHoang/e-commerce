import { createSlice } from "@reduxjs/toolkit";
import { tabConstants } from "../Constants";
interface TabState {
    tabName: string;
    tabStatus: boolean;
}

const initState = {
    tabName: tabConstants.LOGIN_TAB,
    tabStatus: false,
} as TabState;

const tabSlice = createSlice({
    name: "tab",
    initialState: initState,
    reducers: {
        changeTabName(state, action) {
            state.tabName = action.payload;
        },
        changeTabStatus(state, action) {
            state.tabStatus = action.payload;
        },
        resetDefaultTab(state) {
            state.tabName = tabConstants.LOGIN_TAB;
            state.tabStatus = false;
        },
    },
});

export const { changeTabName, changeTabStatus, resetDefaultTab } =
    tabSlice.actions;
    
export default tabSlice.reducer;
