import React from 'react';

import MainLayout from '../components/page/Layout';

import Hero from '../components/_pages/home/Hero';
import RecentProjects from '../components/_pages/home/RecentProjects';
import MySkillsets from '../components/_pages/home/MySkillsets';
import Preview from '../components/_pages/home/Preview';

const title = "Home";

const Home = () => {
    return (
        <MainLayout title={title}>
            <Hero/>
            <RecentProjects/>
            <MySkillsets/>
            <Preview/>
        </MainLayout>
    );
}

export default Home;