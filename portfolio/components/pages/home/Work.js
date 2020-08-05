import React, { useState, useEffect } from 'react'

import Section from '../../page/Section'

import ButtonBorderless from '../../form/ButtonBorderless'

import data from '../portfolio/data.js'
import PortfolioCard from '../portfolio/Card.js'

import styles from './Work.module.scss';

const Work = () => {
  const [ dataIndex, setDataIndex ] = useState(1)
  const [ windowY, setWindowY ] = useState(0)

  useEffect(() => {
    const handleScroll = () => setWindowY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [windowY])

  const loadMorePortfolio = async e => {
    e.preventDefault()

    await setDataIndex( dataIndex + 1)
    window.scrollTo(0, windowY);

  }

  return <Section name={`Work`} fluid className={`py-5 ${styles.roundedTopCorners}`}>
    <div className='container' style={{ maxWidth: '1600px' }}>
      <div className="row">
        <div className='col-12 col-md-4 offset-md-4 d-flex flex-column align-items-center'>
          <h3 className={`${styles.title} mb-5`}>Work</h3>
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
            <h4 className={styles.more}>More</h4>
            <img src="/img/longArrowPurple.svg" className="img-fluid" />
          </ButtonBorderless>
        </div>
      </div>
    </div>
  </Section>
}

export default Work;