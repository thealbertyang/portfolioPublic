import React from 'react'
import Section from '../../page/Section'

import styles from './Hero.module.scss'

const Hero = () =>
<Section 
  name={`Hero`}
  fluid
  className={`d-flex align-items-center`}
  background={`linear-gradient(rgb(32 255 214 / 99%) 0%, rgb(0 25 115 / 59%) 100%), url(/img/bg1.jpg) center center/ cover`} 
  height={`985px`}
>
    <div className="row flex-fill d-flex align-items-center">
      <div className='col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center'>
        <h6 className={`${styles.name} pb-4`}>Albert Yang</h6>
        <h1 className={styles.title}>Web</h1>
        <h1 className={styles.title}>Developer</h1>
      </div>
    </div>
</Section>

export default Hero