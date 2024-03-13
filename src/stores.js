import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./shares/countSlice";
import shareSlice from "./shares/shareSlice";
import userSlice from "./modules/user/userSlice";
import adminSlice from "./modules/admin/adminSlice";
import singerSlice from "./modules/singer/singerSlice";


export const stores = configureStore({
    reducer : {
        share: shareSlice,
        count : countSlice,
        user : userSlice,
        admin : adminSlice,
        singer: singerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})