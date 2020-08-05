import React from 'react';

import Section from '../../../page/Section';
import LeftImageRightDescription from '../sections/LeftImageRightDescription'
import LeftDescriptionRightImage from '../sections/LeftDescriptionRightImage'
import FullImage from '../sections/FullImage';

const CSULB = () => {
    return (
        <>
        <LeftImageRightDescription
            backgroundColor={`#f5f5f5`}
            heading="Rental Finder"
            img={{
                url: "/img/portfolio/screenshots/csulb/r5.jpg",
                align: 'justify-content-center'
            }}
            points={[
                'Search and filter rentals',
                'Google Maps API',
                'Helps students find housing'
            ]}
        />
        <FullImage
            imgUrl="/img/portfolio/screenshots/csulb/r0.jpg"
        />
        <LeftDescriptionRightImage
            backgroundColor={`#f5f5f5`}
            heading="Admin Backend"
            img={{
                url: "/img/portfolio/screenshots/csulb/r1.jpg",
            }}
            points={[
                'Graph dasboard',
                'Add rentals',
                'Helps employees manage housing'
            ]}
        />
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