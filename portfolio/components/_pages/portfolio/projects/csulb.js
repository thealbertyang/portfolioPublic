import React from 'react';
import Section from '../../../page/Section';

const CSULB = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-6 offset-2 text-center'>
                        <div className="bg-image-left">
                            <img src="/img/portfolio/screenshots/csulb/r5.jpg" className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex flex-column justify-content-center'>
                        <h5 className='text-secondary'>Rental Finder</h5>
                        <p className='text-justify text-muted'>
                            The rental finder application would help students find housing nearby the university.
                        </p>
                    </div>
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
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-4 d-flex flex-column justify-content-center'>
                        <h5 className='text-muted'>Administrator Back-end</h5>
                        <p className='text-justify text-muted'>The administrator backend was customly built in PHP.</p>
                    </div>
                    <div className='col-md-6 offset-2 text-center'>
                        <div className="bg-image-right">
                            <img src="/img/portfolio/screenshots/csulb/r1.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                        <h5 className='text-secondary'>Front-end Interface</h5>
                        <p className='text-justify text-muted'>
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