import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';
import Footer from '../pages/Home/Footer';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
