import { paths } from "../../constants/paths";
import { GenreCreate } from "./entry/GenreCreate";
import { GenreList } from "./list/GenreList";

export const genreRoutes = [
    {
        id: "genre",
        path: paths.genre,
        element: <GenreList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Genre", url: paths.genre },
                    { label: null, url: null, current: "List" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
    {
        id: "genreCreate",
        path: paths.genreCreate,
        element: <GenreCreate />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Genre", url: paths.genre },
                    { label: null, url: null, current: "Create" },
                ],
                role: ["ADMINISTRATOR"],
            };
        },
    },
];
