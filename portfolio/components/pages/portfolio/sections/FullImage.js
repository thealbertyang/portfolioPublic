import React from 'react'
import Section from '../../../page/Section';

const FullImage = ({ imgUrl }) => 
    <Section fluid backgroundColor={`#ffffff`}>
        <div className='row'>
            <div className='col-md-12 px-0'>
                <img src={imgUrl} className='img-fluid'/>
            </div>
        </div>
    </Section>

export default FullImage