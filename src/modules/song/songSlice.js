import { createSlice } from "@reduxjs/toolkit";
import { songPayload } from "./songPayload";

const songSlice = createSlice({
    name: "admin",
    initialState: {
        songs: [],
        song: null,
        paginateParams: songPayload.paginateParams,
        total: 0,
    },
    reducers: {
        index: (state, action) => {
            state.songs = action.payload;
            return state;
        },
        update: (state, action) => {
            state.song = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
    },
});

export const { index, update, setPaginate } = songSlice.actions;
export default songSlice.reducer;
