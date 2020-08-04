import React from 'react'
import Section from '../../page/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import config from '../../../config.js'

const iconsMap = [
  {
    name: 'github',
    url: config.urls.github,
    icon: faGithubAlt 
  },
  {
    name: 'linkedin',
    url: config.urls.linkedin,
    icon: faLinkedin 
  },
]

const Icon = ({ url, icon }) =>
  <a href={url} target="_blank" className="mx-5">
    <FontAwesomeIcon icon={icon} className="text-white" size="9x" />
  </a>

const Social = () =>
<Section fluid className={`d-flex p-5`} name={`social`} style={{ minHeight: 'calc(100vh + 50px)' }} background={`linear-gradient(180deg, #151124 0%, #31169D 100%)`}>
    <div className="row flex-fill">
        <div className='col-md-12 d-flex align-items-center justify-content-center'>
          {
            iconsMap && iconsMap.map(item => 
              <Icon 
                key={item.name}
                {...item}
              />
            )
          }
        </div>
    </div>
</Section>

export default Social