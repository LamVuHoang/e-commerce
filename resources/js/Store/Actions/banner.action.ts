import { createAsyncThunk } from "@reduxjs/toolkit";
import bannerService from "../Services/banner.service";

export const getAllBanner = createAsyncThunk(
    "banner/getAllBanner",
    async () => {
        const response = await bannerService.getAllBanner();
        return response.data;
    }
);
