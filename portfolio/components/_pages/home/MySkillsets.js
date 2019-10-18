import React from 'react'
import Section from '../../page/Section'


const MySkillsets = () =>
<Section name={`mySkillsets`} fluid backgroundColor={`#232323`} className="p-5">
    <div className="container my-5 p-5">
      <div className="row">
        <div className='col-12 col-md-4'>
          <div className='row d-flex flex-column pb-4' style={{ flex: '1 1', height: '100%' }}>
            <div className='col-12 d-flex flex-column justify-content-start align-items-start' style={{ flex: '1 1' }}>
              <h2 className='mb-4 text-white'>My skillsets</h2>
              <p className='body-one text-white-50'>I have years of experience in front-end and back-end design. My expertise is well rounded.</p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-8 d-flex align-items-center'>
          <ul className='row' style={{ listStyle: 'none', padding: '0' }}>
            <li className='col-6 col-md-4 mb-5'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/react.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
            <li className='col-6 col-md-4 mb-5'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/mongo.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
            <li className='col-6 col-md-4 mb-5'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/node.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
            <li className='col-6 col-md-4'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/ps.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
            <li className='col-6 col-md-4'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/bootstrap.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
            <li className='col-6 col-md-4'>
                <div className='card bg-transparent border-0'>
                  <div className='card-body p-0 d-flex flex-column align-items-center justify-content-center'>
                    <img src='/img/docker.png' className="img-fluid"/>
                  </div>
                </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>

export default MySkillsets
