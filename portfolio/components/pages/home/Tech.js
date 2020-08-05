import React, { useEffect, useState } from 'react'
import Section from '../../page/Section'

import config from '../../../config'

import styles from './Tech.module.scss'

const TechList = ({ name, color, list, style, lastIndex }) => {
  return <div className={`col-12 ${lastIndex ? 'pb-0 mb-0' : 'mb-5 pb-4'}`} style={style}>
    <h1 className={`mb-4 ${styles.headingDiscipline}`} style={{ color }}>{name}</h1>
    <ul className='d-flex flex-column flex-wrap' style={{ listStyle: 'none' }}>
      {list && list.map(item => 
        <li key={item.name} className='d-flex align-items-center mb-3' style={{ maxWidth: '33%' }}>
          <img src={`${item.img}`} className="img-fluid w-40px"/>
          <h6 className={`text-white mb-0 ml-2 ${styles.headingTech}`}>{item.name}</h6>
        </li>)
      }
    </ul>
  </div>
}

const Skills = ({ tech }) => {
  let [ windowWidth, setWindowWidth ] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return tech.map((item, key) => 
    <TechList
      key={key}
      lastIndex={key + 1 === tech.length ? true : false}
      {...item}
      style={{ 
        paddingLeft: `${key * (((windowWidth * (windowWidth > 772 ? .50 : .35)) / tech.length) / windowWidth) * 100}%`, 
      }}
    />
  )
}



const Tech = () =>
<Section name={`Tech`} fluid background={`linear-gradient(165.45deg, #6966FF 2.2%, #00b7ca 97.12%) `} className={`py-5 px-1 p-md-5 ${styles.roundedBottomBorders}`}>
  <div className="row mx-auto"  style={{ maxWidth: '1440px' }}>
    <div className='col-12 col-md-12'>
      <h3 className={`${styles.title} mb-4`}>Tech</h3>
    </div>
    <Skills
      tech={config.tech}
    />
  </div>
</Section>

export default Tech
