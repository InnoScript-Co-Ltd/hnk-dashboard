import { Outlet, useNavigate } from 'react-router-dom';
import { getData, removeAllData } from '../../helpers/localstorage';
import { AppBar, DrawerHeader, keys, Drawer } from '../../constants/config';
import { useEffect, useState } from 'react';
import { Box, Collapse, Divider, IconButton, List, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import { items } from './defaultPaths';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { paths } from '../../constants/paths';

export const DefaultLayout = () => {


    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState();
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toogleExpand = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const token = getData(keys.API_TOKEN);
    const navigate = useNavigate();

    const logout = async () => {
        removeAllData();
        navigate(paths.adminLogout);
    }

    const getUserData = () => {
        const data = getData(keys.USER)
        setUser(data)
    }

    useEffect(() => {
        getUserData()
    }, [])

    useEffect(() => {
        if (!token) {
            navigate('/auth/login');
        }
    }, [token, navigate]);

    return (
        <>
            {token && (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                WinyKhin
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {items.map((nav, index) => (
                                <div key={index}>
                                    <ListItemButton onClick={() => {
                                        toogleExpand(index);
                                        if (nav.url) {
                                            navigate(nav.url)
                                        }
                                    }
                                    }>
                                        <ListItemIcon>
                                            {nav.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={nav.label} />
                                        {nav?.children?.length > 0 && (
                                            expandedIndex === index ? <ExpandLess /> : <ExpandMore />
                                        )}
                                    </ListItemButton>

                                    {
                                        nav?.children?.length > 0 && (
                                            <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {
                                                        nav.children.map((child, index) => (
                                                            <ListItemButton
                                                                onClick={() => {
                                                                    navigate(child.url)
                                                                }}
                                                                key={child.key}
                                                                sx={{ pl: 4 }}
                                                            >
                                                                <ListItemIcon>
                                                                    {child.icon}
                                                                </ListItemIcon>
                                                                <ListItemText primary={child.label} />
                                                            </ListItemButton>
                                                        ))
                                                    }
                                                </List>
                                            </Collapse>
                                        )
                                    }
                                </div>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    {user?.name}
                                </ListItemText>
                            </ListItemButton>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Logout
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        <Outlet />
                    </Box>
                </Box>
            )}
        </>
    )
}