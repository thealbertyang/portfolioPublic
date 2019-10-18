import React from 'react';
import Section from '../../../page/Section';

const Inhertia = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`} fluid>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                        <p className='text-justify text-muted'>
                            <img src='/img/portfolio/screenshots/inhertia/1.png' className='img-fluid shadow'/>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section className="px-3 py-5" backgroundColor={`#ffffff`} fluid>
            <div className='row'>
                <div className='col-md-4 offset-md-1 d-flex flex-column justify-content-center'>
                    <h5 className='text-muted'>Administrator Back-end</h5>
                    <p className='text-justify text-muted mb-4'>
                        The administrative back-end was built with MongoDB, Express, React and Node.js.
                    </p>
                </div>
                <div className='col-md-6 pr-md-0 offset-0 offset-md-1'>
                    <div className="bg-image-right">
                        <img src="/img/portfolio/screenshots/inhertia/8.png"/>
                    </div>
                </div>
            </div>
        </Section>
        <Section className="px-3 py-5" backgroundColor={`#f5f5f5`} fluid>
            <div className='row'>
                <div className='col-md-6 pl-md-0 order-1 order-md-0'>
                    <div className="bg-image-left d-flex justify-content-center">
                        <img src="/img/portfolio/screenshots/inhertia/3.png"/>
                    </div>
                </div>
                <div className='col-md-4 offset-0 offset-md-1 d-flex flex-column justify-content-center order-0 order-md-1'>
                    <h5 className='text-secondary'>Customers' Back-end</h5>
                    <p className='text-justify text-muted mb-0 mb-md-0'>
                        Shoppers could login and review their profile and orders.
                    </p>
                </div>
            </div>
        </Section>
        <Section className="py-5 my-5" backgroundColor={`#ffffff`}>
            <div className='row'>
                <div className='col-md-12'>
                    <h5 className='text-secondary'>Product Pages</h5>
                    <p className='text-justify text-muted mb-4'>
                        These are the product pages.
                    </p>
                </div>
                <div className='col-md-12 mb-5 text-center'>
                    <img src='/img/portfolio/screenshots/inhertia/6.png' className='img-fluid shadow'/>
                </div>
                <div className='col-md-12 text-center'>
                    <img src='/img/portfolio/screenshots/inhertia/2.png' className='img-fluid shadow'/>
                </div>
            </div>
        </Section>
        </>
    )
}

export default Inhertia;