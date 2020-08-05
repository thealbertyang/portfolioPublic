import React from 'react'
import Section from '../../../page/Section'

const CenteredHeadingImage = ({ heading, imgUrl, backgroundColor }) => 
    <Section className="py-5" backgroundColor={typeof backgroundColor !== 'undefined' ? backgroundColor : `#FFFFFF`} fluid>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='text-dark mb-3'>{heading}</h3>
                </div>
                <div className='col-md-11 mx-auto text-center text-center'>
                    <img src={imgUrl} className='img-fluid'/>
                </div>
            </div>
        </div>
    </Section>

export default CenteredHeadingImage