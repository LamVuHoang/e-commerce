import { createSlice } from "@reduxjs/toolkit";
import AppReponse from "../../Type/AppResponse.type";
import UserResource from "../../Type/UserResource.type";
import { getUserInfo, signInUser, signOutUser, signUpUser } from "../Actions";

type authenticationState = {
    signInStatus: boolean;
    signInFetching: boolean;
    signUpFetching: boolean;

    userInfo: UserResource;
    signInResult: AppReponse;
    signUpResult: AppReponse;
    signOutResult: AppReponse;
};

const initialState = {
    signInStatus: window.localStorage.getItem("token") ? true : false,
    userInfo: [],

    signInResult: [],
    signInFetching: false,

    signUpResult: [],
    signUpFetching: false,

    signOutResult: [],
} as authenticationState;

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        changeSigninStatus(state, action) {
            state.signInStatus = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Get User Info
            .addCase(getUserInfo.pending, (state) => {
                state.userInfo = { message: "Loading" };
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.userInfo = { message: "Could not process the request" };
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })

            // Signin User
            .addCase(signInUser.pending, (state) => {
                state.signInFetching = true;
            })
            .addCase(signInUser.rejected, (state) => {
                state.signInFetching = false;
                state.signInResult = {
                    message: "Could not process the request",
                };
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.signInFetching = false;
                state.signInResult = action.payload;
            })

            // Signup User
            .addCase(signUpUser.pending, (state) => {
                state.signUpFetching = true;
            })
            .addCase(signUpUser.rejected, (state) => {
                state.signUpFetching = false;
                state.signUpResult = {
                    message: "Could not process the request",
                };
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.signUpFetching = false;
                state.signUpResult = action.payload;
            })

            // Signout User
            .addCase(signOutUser.pending, (state) => {
                state.signOutResult = { message: "Loading" };
            })
            .addCase(signOutUser.rejected, (state) => {
                state.signOutResult = {
                    message: "Could not process the request",
                };
            })
            .addCase(signOutUser.fulfilled, (state, action) => {
                state.signOutResult = action.payload;
            });
    },
});

export const { changeSigninStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
