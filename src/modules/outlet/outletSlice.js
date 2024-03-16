import { createSlice } from "@reduxjs/toolkit";
import { outletPayload } from "./outletPayload";

const outletSlice = createSlice({
    name: "admin",
    initialState: {
        outlets: [],
        outlet: null,
        paginateParams: outletPayload.paginateParams,
        total: 0,
    },
    reducers: {
        index: (state, action) => {
            state.outlets = action.payload;
            return state;
        },
        update: (state, action) => {
            state.outlet = action.payload;
            return state;
        },
        setPaginate: (state, action) => {
            state.paginateParams = action.payload;
            return state;
        },
    },
});

export const { index, update, setPaginate } = outletSlice.actions;
export default outletSlice.reducer;
