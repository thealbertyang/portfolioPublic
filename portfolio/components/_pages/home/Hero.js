import React from 'react'
import Section from '../../page/Section'

const Hero = () =>
<Section className={`d-flex align-items-end p-5`} fluid name={`hero`} backgroundColor={`#f3f3f3`} backgroundImage={`/img/bg1.jpg`} backgroundSize={`cover`} height={`50rem`}>
    <div className="row flex-fill d-flex align-items-end">
      <div className='col-md-5 col-sm-12 d-flex flex-column align-items-start justify-content-center'>
        <h1 className='text-white'>
          Web developer
        </h1>
        <h2 className='font-weight-light text-white'>Los Angeles.</h2>
        <p className='mb-5 text-white-50'>Hi I'm a full-stack react MERN web developer. Learn more about my work experience if you're interested in hiring.</p>
        <a href='/portfolio' className='btn btn-primary btn-lg'>
          <i className="fas fa-swatchbook mr-2"></i> My portfolio
        </a>
      </div>
    </div>
</Section>

export default Hero
