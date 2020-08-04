import React from 'react';

import Head from 'next/head'

import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children, title }) => {
    return <>
        <Head>
            <title>Albert Yang - {title} </title>
            <meta property="og:title" content={`Albert Yang - ${title}`} key="title" />
        </Head>
        {children}
    </>
}

export default MainLayout;