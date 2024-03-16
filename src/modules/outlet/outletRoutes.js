import { paths } from "../../constants/paths";
import { OutletCreate } from "./entry/OutletCreate";
import { OutletList } from "./list/OutletList";

export const outletRoutes = [
    {
        id: "outlet",
        path: paths.outlet,
        element: <OutletList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Outlet", url: paths.outlet },
                    { label: null, url: null, current: "List" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
    {
        id: "genreCreate",
        path: paths.genreCreate,
        element: <OutletCreate />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Outlet", url: paths.genre },
                    { label: null, url: null, current: "Create" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
];
