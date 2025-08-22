import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Navbar from '../components/Navbar.jsx';

const RootLayout = () => {

    const location = useLocation()
    let showGetStarted = false

    if (location.pathname === "/")
        showGetStarted =  true

    return (
        <>
            <Navbar showGetStarted = { showGetStarted } />
            <Outlet />
        </>
    );
};

export default RootLayout;