import React from 'react';
import Section from '../../../page/Section';

const KingsHighway = () => {
    return (
        <>
         <Section fluid backgroundColor={`#f5f5f5`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-md-12 m-auto col-sm-12 text-justify">
                        <p>
                        <img src="/img/portfolio/screenshots/kingshighways/home.jpg" className='img-fluid' />
                        </p>
                        <p>
                        <img src="/img/portfolio/screenshots/kingshighways/employee-application.jpg" className='img-fluid' />
                        </p>
                        <p>
                        <img src="/img/portfolio/screenshots/kingshighways/page-service.jpg" className='img-fluid' />
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default KingsHighway;