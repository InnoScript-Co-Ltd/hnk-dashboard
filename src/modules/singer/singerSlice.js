import { createSlice } from "@reduxjs/toolkit";
import { singerPayload } from "./singerPayload";

const singerSlice = createSlice({
    name: "admin",
    initialState: {
        singers: [],
        singer: null,
        paginateParams: singerPayload.paginateParams,
        total: 0,
    },
    reducers: {
        index: (state, action) => {
            state.singers = action.payload;
            return state;
        },
        update: (state, action) => {
            state.singer = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
    },
});

export const { index, update, setPaginate } = singerSlice.actions;
export default singerSlice.reducer;
