import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./shares/countSlice";
import shareSlice from "./shares/shareSlice";
import userSlice from "./modules/user/userSlice";
import adminSlice from "./modules/admin/adminSlice";
import singerSlice from "./modules/singer/singerSlice";
<<<<<<< HEAD

=======
import songSlice from "./modules/song/songSlice";
import genreSlice from "./modules/genre/genreSlice";
>>>>>>> song/genre/singer

export const stores = configureStore({
    reducer: {
        share: shareSlice,
<<<<<<< HEAD
        count : countSlice,
        user : userSlice,
        admin : adminSlice,
        singer: singerSlice
=======
        count: countSlice,
        user: userSlice,
        admin: adminSlice,
        singer: singerSlice,
        song: songSlice,
        genre: genreSlice,
>>>>>>> song/genre/singer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
