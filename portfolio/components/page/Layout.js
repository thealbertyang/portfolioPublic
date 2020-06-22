import React from 'react';

import '../../assets/styles/app.scss';

import Head from 'next/head'

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children, title }) => {
    return <>
        <Head>
            <title>Albert Yang - {title} </title>
            <meta property="og:title" content={`Albert Yang - ${title}`} key="title" />
        </Head>
        <Navbar/>
        {children}
        <Footer/>
    </>
}

export default MainLayout;