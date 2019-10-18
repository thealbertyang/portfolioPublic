import React from 'react';
import Section from '../../../page/Section';

const Otis = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                        <p className='text-justify text-muted'>
                        <   img src='/img/portfolio/screenshots/otis/login.jpg' className='img-fluid shadow'/>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-4 d-flex flex-column justify-content-center'>
                        <h5 className='text-muted'>Administrator Back-end</h5>
                        <p className='text-justify text-muted'>The administrative back-end was built with Voyager. On the back-end you could manage training programs, and users.</p>
                    </div>
                    <div className='col-md-6 offset-2 text-center'>
                        <div className="bg-image-right">
                            <img src="/img/portfolio/screenshots/otis/admin-training.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-6 offset-2 text-center'>
                        <div className="bg-image-left">
                            <img src="/img/portfolio/screenshots/otis/profile.jpg" className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex flex-column justify-content-center'>
                        <h5 className='text-secondary'>Participant Back-end</h5>
                        <p className='text-justify text-muted'>The trainees' back-end screen automatically loaded the participants' class to educate and earn badges.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column justify-content-center'>
                        <h5 className='text-secondary'>Training Classes</h5>
                        <p className='text-justify text-muted'>
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
            </div>
        </Section>
        </>
    )
}

export default Otis;