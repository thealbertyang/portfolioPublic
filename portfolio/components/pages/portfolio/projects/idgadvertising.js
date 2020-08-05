import React from 'react';
import Section from '../../../page/Section';

const IDGAdvertising = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`} fluid>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                        <p className='text-justify text-muted'>
                            <img src="/img/portfolio/screenshots/idg/slider-1.jpg" className="d-block w-100" alt="..." />
                            <img src="/img/portfolio/screenshots/idg/social.jpg" className="d-block w-100" alt="..." />
                            <img src="/img/portfolio/screenshots/idg/slider-3.jpg" className="d-block w-100" alt="..." />
                            <img src="/img/portfolio/screenshots/idg/google-process.jpg" className="d-block w-100" alt="..." />
                            <img src="/img/portfolio/screenshots/idg/slider-2.jpg" className="d-block w-100" alt="..." />
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default IDGAdvertising;