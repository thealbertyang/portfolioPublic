import React from 'react'
import Section from '../../../page/Section';

import styles from './Sections.module.scss'

const LeftImageRightDescription = ({ img, heading, points, backgroundColor }) => 
    <Section className="py-5" backgroundColor={typeof backgroundColor !== 'undefined' ? backgroundColor : `#FFFFFF`} fluid>
        <div className='row'>
            <div className='col-md-6 pl-md-0 order-1 order-md-0'>
                <div className={`bg-image-left d-flex ${typeof img.align !== 'undefined' ? img.align : 'justify-content-start'}`}>
                    <img src={img.url} className="w-100 w-md-auto"/>
                </div>
            </div>
            <div className='col-md-3 offset-0 offset-md-1 d-flex flex-column justify-content-center order-0 order-md-1'>
                <h3 className='text-dark text-center text-md-right'>{heading}</h3>
                {points && 
                    <ul className={`list-group list-group-flush text-md-right text-center mb-4 mb-md-0 ${styles.list}`}> 
                        {
                            points.map((item, key) => 
                                <li className="list-group-item bg-transparent border-0 px-0">{item}</li>
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    </Section>

export default LeftImageRightDescription