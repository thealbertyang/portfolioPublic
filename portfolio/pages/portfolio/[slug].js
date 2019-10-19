import React from 'react';
import { useRouter } from 'next/router'
import * as _ from 'lodash'
import dynamic from 'next/dynamic'

import data from '../../components/_pages/portfolio/data';

import Header from '../../components/page/Header';
import Section from '../../components/page/Section';
import MainLayout from '../../components/page/Layout';

const Portfolio = () => {
    const router = useRouter()
    const { slug } = router.query

    let project = _.find(data, { 'slug': slug })
    let projectIndex = _.findIndex(data, { 'slug': slug })
    let nextIndex = (data.length === projectIndex + 1) ? 0 : (projectIndex + 1)
       
    let projectsDir = '/portfolio/projects';
    let projectFile = project && project.slug

    const Project = project && dynamic(() => import('../../components/_pages'+projectsDir+'/'+projectFile))

    return project ? <MainLayout>
        <Header 
            overlineText={`Projects`} 
            overlineClassName={`text-white`} 
            titleClassName={`text-white font-weight-normal`} 
            titleText={project.title} 
            backgroundImage={project.background} 
            height={`35rem`}>
            <div className='row'>
                <div className='col-12 d-flex flex-column'>
                    {typeof project.github !== undefined && <a href={project.url} target='_blank' className='btn btn-primary mb-2' tabIndex="1"><i className='fas fa-globe fa-fw'></i> View Site</a>}
                    {typeof project.github !== undefined && <a href={project.github} target='_blank' className='btn' tabIndex="2" className="btn text-white"><i className="fab fa-github"></i> View Github</a>}
                </div>
            </div>
        </Header>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 m-auto text-center'>
                        <h3>Summary</h3>
                        <p className='text-justify text-muted'>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Project/>
        <Section backgroundColor={`#0d0d0d`} fluid>
            <div className='row'>
                <div className='col-md-6 text-center' style={{ background: `url(${data[nextIndex].background}) center center / cover`, minHeight: '500px' }}/>
                <div className='col-md-6 text-center d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '500px' }}>
                    <a href={`/portfolio/${data[nextIndex].slug}`}>
                        <h4 className='text-white font-weight-light'><span className='text-muted'>Next Project</span> {data[nextIndex].title}</h4>
                    </a>
                </div>
            </div>
        </Section>
    </MainLayout> : null
}

export default Portfolio;


