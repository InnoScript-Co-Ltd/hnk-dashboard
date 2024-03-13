import { paths } from "../../constants/paths"
import { SingerList } from "./list/SingerList"


export const singerRoutes = [
    {
        id: "singer",
        path: paths.singer,
        element : <SingerList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
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