import React from 'react'
import Section from '../../page/Section'

const styles = {
  title: {
    fontFamily: 'Advent Pro',
    fontWeight: '500',
    color: 'transparent',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '100%',
    letterSpacing: '0.07em',
    textStroke: '4px #FFFFFF',
    '-webkitTextStroke': '4px #FFFFFF',
    textShadow: '0px 0px 45px rgba(207, 196, 255, 0.35)'
  },
  name: {
    fontSize: '24px',
    fontFamily: 'Raleway',
    fontWeight: '400',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1em',
  }
}

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
        <h6 style={styles.name} className="pb-4 text-center">Albert Yang</h6>
        <h1 style={styles.title}>Web</h1>
        <h1 style={styles.title}>Developer</h1>
      </div>
    </div>
</Section>

export default Hero