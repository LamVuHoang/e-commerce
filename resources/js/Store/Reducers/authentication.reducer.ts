import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, logInUser, logOutUser, signUpUser } from "../Actions";
import AppResponse from "../../Type/appResponse.type";

type authenticationState = {
    logInStatus: boolean;
    userInfo: AppResponse;
    logInResult: AppResponse;
    signUpResult: AppResponse;
    logOutResult: AppResponse;
};

const initialState = {
    logInStatus: window.localStorage.getItem("token") ? true : false,
    userInfo: [],
    logInResult: [],
    signUpResult: [],
    logOutResult: [],
} as authenticationState;

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        changeLoginStatus(state, action) {
            state.logInStatus = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfo.pending, (state, action) => {
                state.userInfo = { message: "Loading" };
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.userInfo = { message: "abc" };
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })

            .addCase(logInUser.pending, (state, action) => {})
            .addCase(logInUser.rejected, (state, action) => {})
            .addCase(logInUser.fulfilled, (state, action) => {
                state.logInResult = action.payload;
            })

            .addCase(signUpUser.pending, (state) => {
                state.signUpResult = { message: "Loading" };
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.signUpResult = action.payload;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.signUpResult = action.payload;
            })

            .addCase(logOutUser.pending, (state, action) => {})
            .addCase(logOutUser.rejected, (state, action) => {})
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.logOutResult = action.payload;
            });
    },
});

export const { changeLoginStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
