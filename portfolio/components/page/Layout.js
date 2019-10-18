import React from 'react';

import '../../assets/styles/app.scss';

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return <>
        <Navbar/>
        {children}
        <Footer/>
    </>
}

export default MainLayout;