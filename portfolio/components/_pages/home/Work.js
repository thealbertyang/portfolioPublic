import React, { useState } from 'react'

import Section from '../../page/Section'

import ButtonBorderless from '../../form/ButtonBorderless'

import data from '../portfolio/data.js'
import PortfolioCard from '../portfolio/Card.js'

const styles = {
  title: {
    fontSize: '96px',
    fontFamily: 'Advent Pro',
    fontWeight: '500',
    color: '#F5F5F5',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '113.5%',
    letterSpacing: '0.07em',
    textStroke: '4px #AAAAAA',
    '-webkitTextStroke': '4px #AAAAAA',
  },
  roundedTopCorners: {
    borderRadius: '50% 50% 0% 0%'
  },
  more: {
    fontFamily: 'Graphik',
    fontSize: '48px',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#8272FF',
    textTransform: 'lowercase',
    textAlign: 'center',
    lineHeight: '113.5%',
    letterSpacing: '0.08em',
  }
}


const Work = () => {
  const [ dataIndex, setDataIndex ] = useState(1)

  const loadMorePortfolio = e => {
    e.preventDefault()
    setDataIndex( dataIndex + 1)
  }

  return <Section name={`Work`} fluid className="py-5" style={styles.roundedTopCorners}>
    <div className='container' style={{ maxWidth: '1600px' }}>
      <div className="row">
        <div className='col-12 col-md-4 offset-md-4 d-flex flex-column align-items-center'>
          <h3 style={styles.title} className='mb-5'>Work</h3>
        </div>
      </div>
      <div className={`row no-gutters mb-5`}>
        {data.map((item, index) => {
          if(index < (dataIndex * 4)) {
            return (
              <div className='col-12 col-md-6' key={index}>
                <PortfolioCard
                  title={item.title}
                  slug={item.slug}
                  description={item.description}
                  background={item.background}
                  logo={item.logo}
                  style={{
                    minHeight: '555px'
                  }}
                />
              </div>
            )
          }
        })}
      </div>
      <div className={`row`}>
        <div className='col-12 col-md-12 d-flex justify-content-center align-items-end justify-content-md-end'>
          <ButtonBorderless onClick={loadMorePortfolio} url={`#`} className={`d-flex flex-column align-items-start p-0 ${typeof data[(dataIndex * 4)] === 'undefined' ? 'disabled' : null}`}>
            <h4 style={styles.more}>More</h4>
            <img src="/img/longArrowPurple.svg" className="img-fluid" />
          </ButtonBorderless>
        </div>
      </div>
    </div>
  </Section>
}

export default Work;