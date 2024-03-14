<<<<<<< HEAD
import { paths } from "../../constants/paths"
import { SingerList } from "./list/SingerList"

=======
import { paths } from "../../constants/paths";
import { SingerCreate } from "./entry/SingerCreate";
import { SingerList } from "./list/SingerList";
>>>>>>> song/genre/singer

export const singerRoutes = [
    {
        id: "singer",
        path: paths.singer,
<<<<<<< HEAD
        element : <SingerList />,
=======
        element: <SingerList />,
>>>>>>> song/genre/singer
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
<<<<<<< HEAD
                    { label: "Create", url: paths.singerCreate },
                ],
            }
        }
    },
    // {
    //     id: "adminCreate",
    //     path: paths.adminCreate,
    //     element : <AdminCreate />,
    //     loader: () => {
    //         return{
    //             breadcrumbs: [
    //                 { label: "Dashboard", url: paths.dashboard },
    //                 { label: "Admin", url: paths.admin },
    //                 { label: null, url: null, current : "Create" },
    //             ],
    //             role: ['ADMINISTRATOR']
    //         }
    //     }
    // },
]
=======
                    { label: "Singer", url: paths.singer },
                    { label: null, url: null, current: "List" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
    {
        id: "singerCreate",
        path: paths.singerCreate,
        element: <SingerCreate />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Singer", url: paths.singerCreate },
                    { label: null, url: null, current: "Create" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
];
>>>>>>> song/genre/singer
