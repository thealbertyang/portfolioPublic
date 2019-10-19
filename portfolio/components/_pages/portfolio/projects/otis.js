import React from 'react';
import Section from '../../../page/Section';

const Otis = () => {
    return (
        <>
        <Section className="py-5" backgroundColor={`#f5f5f5`}>
            <div className='row'>
                <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                    <p className='text-justify text-muted'>
                        <img src='/img/portfolio/screenshots/otis/login.jpg' className='img-fluid shadow'/>
                    </p>
                </div>
            </div>
        </Section>
        <Section className="px-3 py-5" backgroundColor={`#ffffff`}>
            <div className='row'>
                <div className='col-md-4 offset-md-1 d-flex flex-column justify-content-center'>
                    <h4 className='text-secondary'>Administrator Backend</h4>
                    <p className='text-justify text-muted mb-4'>The administrative back-end was built with Voyager. On the back-end you could manage training programs, and users.</p>
                </div>
                <div className='col-md-6 pr-md-0 offset-0 offset-md-1'>
                    <div className="bg-image-right">
                        <img src="/img/portfolio/screenshots/otis/admin-training.jpg" className="w-100 w-md-auto"/>
                    </div>
                </div>
            </div>
        </Section>
        <Section fluid className="px-3 py-5" backgroundColor={`#f5f5f5`}>
            <div className='row'>
                <div className='col-md-6 pl-md-0 order-1 order-md-0'>
                    <div className="bg-image-left">
                        <img src="/img/portfolio/screenshots/otis/profile.jpg" className="w-100 w-md-auto"/>
                    </div>
                </div>
                <div className='col-md-4 offset-0 offset-md-1 d-flex flex-column justify-content-center order-0 order-md-1'>
                    <h4 className='text-secondary'>Participant Backend</h4>
                    <p className='text-justify text-muted mb-4 mb-md-0'>The trainees' back-end screen automatically loaded the participants' class to educate and earn badges.</p>
                </div>
            </div>
        </Section>
        <Section className="py-5" backgroundColor={`#ffffff`}>
            <div className='row'>
                <div className='col-md-12 d-flex flex-column justify-content-center'>
                    <h5 className='text-secondary'>Training Classes</h5>
                    <p className='text-justify text-muted mb-4'>
                    Other miscellaneous interfaces.
                    </p>
                </div>
                <div className='col-md-9 text-center text-center'>
                    <img src='/img/portfolio/screenshots/otis/reward.gif' className='img-fluid'/>
                </div>
                <div className='col-md-3 text-center text-center'>
                    <img src='/img/portfolio/screenshots/otis/admin-select2.jpg' className='img-fluid'/>
                </div>
                <div className='col-md-12 mt-4 text-center text-center'>
                    <img src='/img/portfolio/screenshots/otis/admin-training.jpg' className='img-fluid'/>
                </div>
            </div>
        </Section>
        </>
    )
}

export default Otis;