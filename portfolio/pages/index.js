import React from 'react';

import MainLayout from '../components/page/Layout';

import Hero from '../components/pages/home/Hero';
import Work from '../components/pages/home/Work';
import Tech from '../components/pages/home/Tech';
import Social from '../components/pages/home/Social';

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