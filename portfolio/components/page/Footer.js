import React from 'react'

const Footer = () =>
    <div className="footer container-fluid p-5">
      <div className={`row`}>
        <div className="col-md-4 d-flex align-items-center text-secondary text-justify mb-5 mb-md-0">
          2018 Albert Yang -- All Rights Reserved
        </div>
        <div className="col-md-4 offset-md-4 d-flex justify-content-end text-secondary">
          <a href='https://github.com/thealbertyang' target='_blank' className='mr-4'>
            <i className="fab fa-github" style={{ fontSize: '2rem' }}></i>
          </a>
          <a href='https://linkedin.com/in/thealbertyang/' target='_blank'>
            <i className="fab fa-linkedin-in" style={{ fontSize: '2rem' }}></i>
          </a>
        </div>
      </div>
    </div>

export default Footer
