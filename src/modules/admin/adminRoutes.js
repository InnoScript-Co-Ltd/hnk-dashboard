import { paths } from "../../constants/paths"
import { AdminCreate } from "./entry/AdminCreate"
import { AdminList } from "./list/AdminList"


export const adminRoutes = [
    {
        id: "admin",
        path: paths.admin,
        element : <AdminList />,
        loader: () => {
            return {
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Admin", url: paths.admin },
                    { label: null, url: null, current : "List" },
                ],
                role: ['ADMINISTRATOR']
            }
        }
    },
    {
        id: "adminCreate",
        path: paths.adminCreate,
        element : <AdminCreate />,
        loader: () => {
            return{
                breadcrumbs: [
                    { label: "Dashboard", url: paths.dashboard },
                    { label: "Admin", url: paths.admin },
                    { label: null, url: null, current : "Create" },
                ],
                role: ['ADMINISTRATOR']
            }
        }
    },
]