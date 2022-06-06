import React from "react";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {FormatListBulleted, Home, Map} from "@mui/icons-material";

const bottomNavLinks = [
    {
        to: "/list",
        label: "List",
        icon: <FormatListBulleted/>
    },
    {
        to: "/",
        label: "Home",
        icon: <Home/>
    },
    {
        to: "/map",
        label: "Map",
        icon: <Map/>
    },
];

const defaultIndex = 1;

function BottomNav() {
    const location = useLocation()

    const navIndex = bottomNavLinks.findIndex(link => link.to === location.pathname);

    return (
        <nav>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={navIndex >= 0 ? navIndex : defaultIndex}>
                    {bottomNavLinks.map(link => <BottomNavigationAction key={link.to} component={Link} to={link.to}
                                                                        label={link.label} icon={link.icon}/>)}
                </BottomNavigation>
            </Paper>
        </nav>
    )
}

export default BottomNav;