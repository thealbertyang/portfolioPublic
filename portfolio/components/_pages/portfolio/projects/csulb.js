import React from 'react';
import Section from '../../../page/Section';

const CSULB = () => {
    return (
        <>
        <Section className="px-3 py-5" backgroundColor={`#f5f5f5`} fluid>
            <div className='row'>
                <div className='col-md-6 pl-md-0 order-1 order-md-0'>
                    <div className="bg-image-left d-flex justify-content-center">
                        <img src="/img/portfolio/screenshots/csulb/r5.jpg"/>
                    </div>
                </div>
                <div className='col-md-4 offset-0 offset-md-1 d-flex flex-column justify-content-center order-0 order-md-1'>
                    <h4 className='text-secondary'>Rental Finder</h4>
                    <p className='text-justify text-muted mb-4 mb-md-0'>
                        The rental finder application would help students find housing nearby the university.
                    </p>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                        <p className='text-justify text-muted'>
                            <img src='/img/portfolio/screenshots/csulb/r0.jpg' className='img-fluid shadow'/>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section fluid backgroundColor={`#f5f5f5`} className="px-3 py-5">
            <div className='row'>
                <div className='col-md-4 offset-md-1 d-flex flex-column justify-content-center'>
                    <h4 className='text-secondary'>Administrator Backend</h4>
                    <p className='text-justify text-muted mb-4'>The administrator backend was customly built in PHP.</p>
                </div>
                <div className='col-md-6 pr-md-0 offset-0 offset-md-1'>
                    <div className="bg-image-right">
                        <img src="/img/portfolio/screenshots/csulb/r1.jpg"/>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                        <h4 className='text-secondary'>Front-end Interface</h4>
                        <p className='text-justify text-muted mb-4'>
                            These were the front-end interfaces I created with HTML, CSS and JQuery.
                        </p>
                        <img src="/img/portfolio/screenshots/csulb/r6.jpg" className='img-fluid mb-4'/>
                        <img src="/img/portfolio/screenshots/csulb/r8.jpg" className='img-fluid mb-4'/>
                        <img src="/img/portfolio/screenshots/csulb/r7.jpg" className='img-fluid mb-4'/>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default CSULB;