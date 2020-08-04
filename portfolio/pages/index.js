import React from 'react';

import MainLayout from '../components/page/Layout';

import Hero from '../components/_pages/home/Hero';
import Work from '../components/_pages/home/Work';
import Tech from '../components/_pages/home/Tech';
import Social from '../components/_pages/home/Social';

const title = "Home";

const Home = () => {
    return (
        <MainLayout title={title}>
            <Hero/>
            <Work/>
            <Tech/>
            <Social/>
        </MainLayout>
    );
}

export default Home;