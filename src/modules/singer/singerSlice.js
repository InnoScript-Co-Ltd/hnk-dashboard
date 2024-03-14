import { createSlice } from "@reduxjs/toolkit";
import { singerPayload } from "./singerPayload";

const singerSlice = createSlice({
<<<<<<< HEAD
    name: 'admin',
    initialState: {
        singers: [],
        singer: null,
        paginateParams : singerPayload.paginateParams,
        total : 0
=======
    name: "admin",
    initialState: {
        singers: [],
        singer: null,
        paginateParams: singerPayload.paginateParams,
        total: 0,
>>>>>>> song/genre/singer
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
<<<<<<< HEAD
        }
    }
});

export const { index, update, setPaginate } = singerSlice.actions;
export default singerSlice.reducer;
=======
        },
    },
});

export const { index, update, setPaginate } = singerSlice.actions;
export default singerSlice.reducer;
>>>>>>> song/genre/singer
