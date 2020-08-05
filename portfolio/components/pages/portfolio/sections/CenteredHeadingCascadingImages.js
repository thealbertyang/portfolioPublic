import React from 'react'
import Section from '../../../page/Section'

import styles from './Sections.module.scss'

const CenteredHeadingCascadingImage = ({ heading, points, images, backgroundColor }) => 
    <Section fluid className="py-5" backgroundColor={typeof backgroundColor !== 'undefined' ? backgroundColor : `#FFFFFF`}>
        <div className='row'>
            <div className='col-md-12 d-flex flex-column align-items-center justify-content-center mb-4'>
                <h3 className='text-dark'>{heading}</h3>
                {points && 
                    <ul className={`list-group list-group-flush text-center ${styles.list}`}>
                        {
                            points && points.map((item, key) => 
                                <li className="list-group-item bg-transparent border-0 px-0">{item}</li>
                            )
                        }
                    </ul>
                }
            </div>
            {images && images[0] &&
                <>
                <div className='col-12 col-md-11 offset-md-1 offset-md-1 pl-md-0 order-1 order-md-0'>
                    <h4 className='text-secondary font-weight-light mb-3'>1. {images[0].heading}</h4>
                </div>
                <div className='col-12 col-md-10 pl-md-0 order-1 order-md-0 mb-5 pb-5'>
                    <div className="bg-image-left">
                        <img src={images[0].imgUrl} className='w-100 w-md-auto'/>
                    </div>
                </div>
                </>
            }
            {images && images[1] &&
                <div className='col-12 col-md-10 offset-md-2 offset-0 pl-md-0 order-1 order-md-0'>
                    <h4 className='text-secondary font-weight-light mb-3 text-right text-md-left'>2. {images[1].heading}</h4>

                    <div className="bg-image-left">
                        <img src={images[1].imgUrl} className='w-100 w-md-auto'/>
                    </div>
                </div>
            }
        </div>
    </Section>

    export default CenteredHeadingCascadingImage