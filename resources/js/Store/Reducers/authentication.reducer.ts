import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, logInUser, logOutUser, signUpUser } from "../Actions";

const initialState = {
    logInStatus: window.localStorage.getItem("token") ? true : false,
    userInfo: [],
    logInResult: [],
    signUpResult: [],
    logOutResult: [],
};

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
            .addCase(getUserInfo.pending, (state) => {
                state.userInfo = { message: "Loading" };
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.userInfo = { message: "Could not process the request" };
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })


            .addCase(logInUser.pending, (state) => {
                state.logInResult = { message: "Loading" };
            })
            .addCase(logInUser.rejected, (state) => {
                state.logInResult = { message: "Could not process the request" };
            })
            .addCase(logInUser.fulfilled, (state, action) => {
                state.logInResult = action.payload;
            })


            .addCase(signUpUser.pending, (state) => {
                state.signUpResult = { message: "Loading" };
            })
            .addCase(signUpUser.rejected, (state) => {
                state.signUpResult = { message: "Could not process the request" };
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.signUpResult = action.payload;
            })



            .addCase(logOutUser.pending, (state) => {
                state.logOutResult = { message: "Loading" };
            })
            .addCase(logOutUser.rejected, (state) => {
                state.logOutResult = { message: "Could not process the request" };
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.logOutResult = action.payload;
            });
    },
});

export const { changeLoginStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
