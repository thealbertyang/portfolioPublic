import React from 'react'

import MainLayout from '../../components/page/Layout';
import Header from '../../components/page/Header'
import Section from '../../components/page/Section'

import data from '../../components/pages/portfolio/data';
import ProjectCard from '../../components/pages/portfolio/Card'

const title = "Portfolio";

const Portfolio = () => {
    return (
        <MainLayout title={title}>
            <Header 
                overlineText={`Projects`} 
                overlineClassName={`text-white`} 
                titleClassName={`text-white font-weight-light`} 
                titleText={`Portfolio`} 
                backgroundImage={`/img/projectsBg.jpg`} 
                height={`35rem`}
            />
            <Section fluid backgroundColor={`#f3f3f3`} className="py-5">
                <div className='container py-5' style={{ maxWidth: '1350px' }}>
                    <div className='row'>
                        {data.map((item, index) => 
                            <div className='col-12 col-md-4 mb-5' key={index}>
                                <ProjectCard
                                    title={item.title}
                                    slug={item.slug}
                                    description={item.description}
                                    background={item.background}
                                    logo={item.logo}
                                />
                                </div>
                            )}
                    </div>
                </div>
	          </Section>
        </MainLayout>
    );
}

export default Portfolio;
