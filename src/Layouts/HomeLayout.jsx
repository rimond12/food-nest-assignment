import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import ScrollBar from '../pages/Shared/ScrollBar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollBar></ScrollBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;