import React from 'react'

import Section from '../../page/Section'

import Overline from '../../typography/Overline'

import ButtonAlt from '../../form/ButtonAlt'

import data from '../portfolio/data.js'
import PortfolioCard from '../portfolio/Card.js'

const RecentProjects = () =>
<Section name={`recentProjects`} fluid backgroundColor={`#f3f3f3`} className="py-5">
  <div className='container' style={{ maxWidth: '1350px' }}>
    <div className="row">
      <div className='col-4 offset-4 d-flex flex-column align-items-center'>
        <Overline className='text-muted'>Recent</Overline>
        <h2 className='font-weight-light mb-4'>Projects</h2>
      </div>
      <div className='col-4 d-flex align-items-end justify-content-end'>
        <ButtonAlt url={`/portfolio`}>
          More <i className={`material-icons`}>keyboard_arrow_right</i>
        </ButtonAlt>
      </div>
    </div>
    <div className={`row`}>
      {data.map((item, index) => {
        if(index < 3){
          return (
            <div className='col-12 col-md-4' key={index}>
              <PortfolioCard
                title={item.title}
                slug={item.slug}
                description={item.description}
                background={item.background}
                logo={item.logo}
              />
            </div>
          )
        }
      })}
    </div>
  </div>
</Section>

export default RecentProjects;