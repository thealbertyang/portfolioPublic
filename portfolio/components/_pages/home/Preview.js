import React from 'react'
import Section from '../../page/Section'

const Preview = () =>
<Section fluid className={`flex-fill p-5`} name={`preview`}>
    <div className="row">
        <div className='col-6'>
          <div className='card border-0 rounded-0'>
            <div className="card-img-top rounded-0" style={{background: 'url(/img/portfolio/screenshots/jlm/login.jpg) center center / cover no-repeat', height: '50rem' }}>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='row d-flex flex-column pb-4' style={{ flex: '1 1', height: '50%' }}>
            <div className='col-12 d-flex flex-column' style={{ flex: '1 1' }}>
              <div className='card border-0 rounded-0 d-flex flex-column' style={{ flex: '1 1' }}>
                <div className="card-img-top rounded-0 d-flex flex-column" style={{background: 'url(/img/portfolio/screenshots/idg/menu-overlay.jpg) center center / cover no-repeat', flex: '1 1' }}></div>
              </div>
            </div>
          </div>
          <div className='row d-flex flex-column' style={{ flex: '1 1', height: '50%' }}>
            <div className='col-12 d-flex flex-column' style={{ flex: '1 1' }}>
              <div className='card border-0 rounded-0 d-flex flex-column' style={{ flex: '1 1' }}>
                <div className="card-img-top rounded-0 d-flex flex-column" style={{background: 'url(/img/portfolio/screenshots/otis/profile-short.jpg) center center / cover no-repeat', flex: '1 1' }}></div>
              </div>
            </div>
          </div>
        </div>
    </div>
</Section>

export default Preview
