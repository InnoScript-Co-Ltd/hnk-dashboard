import { paths } from "../../constants/paths";
import { SingerCreate } from "./entry/SingerCreate";
import { SingerList } from "./list/SingerList";

export const singerRoutes = [
    {
        id: "singer",
        path: paths.singer,
        element: <SingerList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
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
