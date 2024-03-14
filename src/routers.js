import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/default";
import { NotFound } from "./layouts/default/pages/NotFound";
import { BlankTemplate } from "./layouts/default/pages/BlankTemplate";
import { Login } from "./modules/auth/entry/Login";
import { dashbardRoutes } from "./modules/dashboard/dashboardRoute";
import { userRoutes } from "./modules/user/userRoutes";
import { adminRoutes } from "./modules/admin/adminRoutes";
import { singerRoutes } from "./modules/singer/singerRoutes";
<<<<<<< HEAD


=======
import { songRoutes } from "./modules/song/songRoutes";
import { genreRoutes } from "./modules/genre/genreRoutes";
>>>>>>> song/genre/singer

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            ...dashbardRoutes,
            ...userRoutes,
            ...adminRoutes,
<<<<<<< HEAD
            ...singerRoutes
        ]
=======
            ...singerRoutes,
            ...songRoutes,
            ...genreRoutes,
        ],
>>>>>>> song/genre/singer
    },
    {
        path: "auth",
        element: <BlankTemplate />,
        errorElement: <NotFound />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);
