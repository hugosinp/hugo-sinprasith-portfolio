import React from 'react';
import { Outlet } from "react-router-dom";

import AHeader from '../components/atomes/aHeader';
import AFooter from '../components/atomes/aFooter';


const Layout = () => {
    return (
        <>
            <AHeader />
                <Outlet />
            <AFooter />
        </>
    )
};

export default Layout;
