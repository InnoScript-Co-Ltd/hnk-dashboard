import { createSlice } from "@reduxjs/toolkit";
import { genrePayload } from "./genrePayload";

const genreSlice = createSlice({
    name: "admin",
    initialState: {
        genres: [],
        genre: null,
        paginateParams: genrePayload.paginateParams,
        total: 0,
    },
    reducers: {
        index: (state, action) => {
            state.genres = action.payload;
            return state;
        },
        update: (state, action) => {
            state.genre = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
    },
});

export const { index, update, setPaginate } = genreSlice.actions;
export default genreSlice.reducer;
