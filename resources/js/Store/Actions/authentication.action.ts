import { createAsyncThunk } from "@reduxjs/toolkit";
import Signin from "../../Type/Signin.type";
import Signup from "../../Type/Signup.type";
import authenticationService from "../Services/authentication.service";

export const getUserInfo = createAsyncThunk("getUserInfo", async () => {
    const response = await authenticationService.getUserInfo();
    return response;
});

export const signInUser = createAsyncThunk(
    "signInUser",
    async (data: Signin) => {
        const response = await authenticationService.signInUser(data);
        return response;
    }
);

export const signUpUser = createAsyncThunk(
    "signUpUser",
    async (data: Signup) => {
        const response = await authenticationService.signUpUser(data);
        return response;
    }
);

export const signOutUser = createAsyncThunk("signOutUser", async () => {
    const response = await authenticationService.signOutUser();
    return response;
});
