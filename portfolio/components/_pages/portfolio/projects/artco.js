import React from 'react';
import Section from '../../../page/Section';

const ArtCo = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-md-12 m-auto col-sm-12 text-justify">
                        <p>
                            <img src="/img/portfolio/screenshots/artco/artco-slider-1.jpg" className='img-fluid' />
                        </p>
                    </div>
                    <div className="col-md-6 m-auto col-sm-12 text-justify">
                        <img src="/img/portfolio/screenshots/artco/artco-slider-2.jpg" className='img-fluid' />
                    </div>
                    <div className="col-md-6 m-auto mt-3 text-justify">
                        <img src="/img/portfolio/screenshots/artco/page-bathroom.jpg" className='img-fluid' />
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default ArtCo;