import { paths } from "../../constants/paths";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import { Person, SpatialAudioOff } from "@mui/icons-material";

export const items = [
    {
        key: '0',
        label: 'Dashboard',
        data: 'Documents Folder',
        icon: <InsertChartIcon />,
        url: "/dashboard"
    },
    {
        key: '1',
        label: 'Singer',
        data: 'Singer',
        icon: <SpatialAudioOff />,
        url: "/singer"
    },
    {
        key: '1',
        label: "User",
        icon: <Person />,
        children: [
            {
                key: '1-1',
                label: 'menu_list',
                icon: <FormatListBulletedIcon />,
                url: paths.user
            },
            {
                key: '1-2',
                label: 'menu_create',
                icon: <AddIcon />,
                url: paths.userCreate
            },
        ]
    },
    {
        key: '2',
        label: "Admin",
        icon: <AdminPanelSettingsIcon />,
        children: [
            {
                key: '2-1',
                label: 'menu_list',
                icon: <FormatListBulletedIcon />,
                url: paths.admin
            },
            {
                key: '2-2',
                label: 'menu_create',
                icon: <AddIcon />,
                url: paths.adminCreate
            },
        ]
    }
];
