import React from 'react';
import { useRouter } from 'next/router'
import * as _ from 'lodash'
import dynamic from 'next/dynamic'

import data from '../../components/_pages/portfolio/data';
import Navbar from '../../components/_pages/portfolio/Navbar';
import ButtonBorderless from '../../components//form/ButtonBorderless'

import Head from 'next/head'

import Header from '../../components/page/Header';
import Section from '../../components/page/Section';
import MainLayout from '../../components/page/Layout';

const styles = {
    more: {
        fontFamily: 'Graphik',
        fontSize: '48px',
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#8272FF',
        textTransform: 'lowercase',
        textAlign: 'center',
        lineHeight: '113.5%',
        letterSpacing: '0.08em',
    },
    footerName: {
        fontFamily: 'Graphik',
        fontWeight: '400',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: '113.5%',
        letterSpacing: '0.08em',
    }
  }
  

const Portfolio = () => {
    const router = useRouter()
    const { slug } = router.query

    let project = _.find(data, { 'slug': slug })
    let projectIndex = _.findIndex(data, { 'slug': slug })
    let nextIndex = (data.length === projectIndex + 1) ? 0 : (projectIndex + 1)
       
    let projectsDir = '/portfolio/projects';
    let projectFile = project && project.slug;

    let projectsTitle = project && project.title;

    const Project = project && dynamic(() => import('../../components/_pages'+projectsDir+'/'+projectFile))

    return project ? <MainLayout>
        <Head>
            <title>Albert Yang - {projectsTitle} </title>
            <meta property="og:title" content={`Albert Yang - ${projectsTitle}`} key="title" />
        </Head>
        <Navbar 
            projectUrl={project.url}
        />
                 
        <Header 
            overlineClassName={`text-white`} 
            titleClassName={`text-white font-weight-normal`} 
            titleText={project.title} 
            backgroundImage={project.background} 
            height={`35rem`}>
        </Header>
        {/*<Section backgroundColor={`#ffffff`}>
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
        </Section>*/}
        <Project/>
        <Section fluid className="d-flex" background={`linear-gradient(270deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url(${data[nextIndex].background}) center center / cover`} style={{ minHeight: '39rem' }}>
            <div className='row flex-fill'>
                <div 
                    className='
                        col-12
                        col-md-4 
                        offset-0 
                        offset-md-4 
                        text-center 
                        d-flex 
                        flex-column 
                        justify-content-md-center
                        justify-content-end 
                        align-items-center
                    '>
                    <a href={`/portfolio/${data[nextIndex].slug}`}>
                        <h2 className='text-white' style={styles.footerName}>{data[nextIndex].title}</h2>
                    </a>
                </div>                
                <div className='col-12 col-md-3 offset-0 offset-md-1 text-center d-flex flex-column justify-content-center align-items-center'>
                    <ButtonBorderless url={`/portfolio/${data[nextIndex].slug}`} className="d-flex flex-column align-items-start p-0">
                        <h4 style={styles.more}>Next</h4>
                        <img src="/img/longArrowPurple.svg" className="img-fluid" />
                    </ButtonBorderless>
                </div>
            </div>
        </Section>
    </MainLayout> : null
}

export default Portfolio;


