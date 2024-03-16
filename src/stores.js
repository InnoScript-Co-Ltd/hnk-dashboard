import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./shares/countSlice";
import shareSlice from "./shares/shareSlice";
import userSlice from "./modules/user/userSlice";
import adminSlice from "./modules/admin/adminSlice";
import singerSlice from "./modules/singer/singerSlice";
import songSlice from "./modules/song/songSlice";
import genreSlice from "./modules/genre/genreSlice";
import outletSlice from "./modules/outlet/outletSlice";

export const stores = configureStore({
    reducer: {
        share: shareSlice,
        count: countSlice,
        user: userSlice,
        admin: adminSlice,
        singer: singerSlice,
        song: songSlice,
        genre: genreSlice,
        outlet: outletSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
