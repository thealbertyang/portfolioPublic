import React from 'react'
import Section from '../../page/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Social = () =>
<Section fluid className={`d-flex p-5`} name={`social`} style={{ minHeight: 'calc(100vh + 50px)' }} background={`linear-gradient(180deg, #151124 0%, #31169D 100%)`}>
    <div className="row flex-fill">
        <div className='col-md-12 d-flex align-items-center justify-content-center'>
          <FontAwesomeIcon icon={faGithubAlt} className="mx-5 text-white" size="9x" />
          <FontAwesomeIcon icon={faLinkedin} className="mx-5 text-white" size="9x" />
        </div>
    </div>
</Section>

export default Social