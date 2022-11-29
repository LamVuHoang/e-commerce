import { createSlice } from "@reduxjs/toolkit";
import { getAllBanner } from "../Actions";

interface BannerState {
    bannerList: [] | Response;
}

const initialState = {
    bannerList: [],
} as BannerState;

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBanner.pending, (state, action) => {
                // state.bannerList = action.payload;
            })
            .addCase(getAllBanner.rejected, (state, action) => {
                // state.bannerList = action.payload;
            })
            .addCase(getAllBanner.fulfilled, (state, action) => {
                state.bannerList = action.payload;
            });
    },
});

export default bannerSlice.reducer;
