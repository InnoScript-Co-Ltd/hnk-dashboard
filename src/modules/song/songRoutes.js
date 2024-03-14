import { paths } from "../../constants/paths";
import { SongCreate } from "./entry/SongCreate";
import { SongList } from "./list/SongList";

export const songRoutes = [
    {
        id: "song",
        path: paths.song,
        element: <SongList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Song", url: paths.song },
                    { label: null, url: null, current: "List" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
    {
        id: "songCreate",
        path: paths.songCreate,
        element: <SongCreate />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Song", url: paths.song },
                    { label: null, url: null, current: "Create" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
];
