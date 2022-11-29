import { createAsyncThunk } from "@reduxjs/toolkit";
import authenticationService from "../Services/authentication.service";

export const getUserInfo = createAsyncThunk(
    "getUserInfo",
    async () => {
        const response = await authenticationService.getUserInfo();
        return response.data;
    }
);

export const logInUser = createAsyncThunk(
    "logInUser",
    async (data: { username: string; password: string }) => {
        const response = await authenticationService.logInUser(data);
        return response;
    }
);

export const signUpUser = createAsyncThunk(
    "signUpUser",
    async (data: {
        username: string;
        password: string;
        password_confirmation: string;
    }) => {
        const response = await authenticationService.signUpUser(data);
        return response;
    }
);

export const logOutUser = createAsyncThunk(
    "logOutUser",
    async () => {
        const response = await authenticationService.logOutUser();
        return response.data;
    }
);
