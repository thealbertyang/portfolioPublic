import React from 'react'
import Section from '../../page/Section'

const styles = {
  title: {
    fontSize: '96px',
    fontFamily: 'Advent Pro',
    fontWeight: '500',
    color: 'transparent',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '113.5%',
    letterSpacing: '0.07em',
    textStroke: '4px #F090FF',
    '-webkitTextStroke': '4px #F090FF',
  },
  headingDiscipline: {
    fontFamily: 'Graphik',
    fontWeight: '300',
    fontSize: '144px',
    lineHeight: '113.5%',
    letterSpacing: '0.05em',
    textShadow: '0px 10px 0px rgba(0, 0, 0, 0.15)'
  },
  headingTech: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '113.5%',
    letterSpacing: '0.05em',
  },
  roundedBottomBorders: {
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    marginBottom: '-50px',
    paddingBottom: '50px',
    position: 'relative',
  }
}

const TechList = ({ name, color, list, style }) => {
  return <div className={`col-12 mb-5 pb-4`} style={style}>
    <h1 className="mb-4" style={{ ...styles.headingDiscipline, color }}>{name}</h1>
    <ul className='d-flex flex-column flex-wrap' style={{ listStyle: 'none' }}>
      {list && list.map(item => 
        <li key={item.name} className='d-flex align-items-center mb-3' style={{ maxWidth: '33%' }}>
          <img src={`/img/tech/${item.img}`} className="img-fluid w-40px"/>
          <h6 className="text-white mb-0 ml-2" style={styles.headingTech}>{item.name}</h6>
        </li>)
      }
    </ul>
  </div>
}

const DisciplineList = ({ disciplines }) => disciplines.map((item, key) => 
    <TechList
      index={key}
      key={key}
      {...item}
      style={{ paddingLeft: `${key * (100 / disciplines.length)}vh`, ...((key + 1) === disciplines.length ? { paddingBottom: '0 !important', marginBottom: '0 !important' } : null) }}
    />
  )

const DisciplineObject = [
  {
    name: "Design",
    color: "rgba(255, 213, 251, 0.85)",
    list: [
      {
        name: 'Photoshop',
        img: 'ps.png'
      },
      {
        name: 'Figma',
        img: 'figma.png'
      },
    ]
  },
  {
    name: "Front End",
    color: "rgba(255, 210, 210, 0.85)",
    list: [
      {
        name: 'React',
        img: 'react.png'
      },
      {
        name: 'Redux',
        img: 'redux.png'
      },
      {
        name: 'Bootstrap',
        img: 'bootstrap.png'
      },
      {
        name: 'Webpack',
        img: 'webpack.png'
      },
      {
        name: 'Next',
        img: 'next.png'
      },
    ]
  },
  {
    name: "Back End",
    color: "rgba(255, 226, 209, 0.85)",
    list: [
      {
        name: 'Node',
        img: 'node.png'
      },
      {
        name: 'Go',
        img: 'go.png'
      },
      {
        name: 'PHP',
        img: 'php.png'
      },
      {
        name: 'Nginx',
        img: 'nginx.png'
      },
    ]
  },
  {
    name: "Database",
    color: "rgba(209, 255, 219, 0.85)",
    list: [
      {
        name: 'MySQL',
        img: 'mysql.png'
      },
      {
        name: 'MongoDB',
        img: 'mongo.png'
      },
    ]
  },
  {
    name: "DevOps",
    color: "rgba(209, 247, 255, 0.85)",
    list: [
      {
        name: 'Docker',
        img: 'docker.png'
      },
      {
        name: 'Amazon Web Services',
        img: 'aws.png'
      },
    ]
  },
  {
    name: "Testing",
    color: "rgba(216, 209, 255, 0.85)",
    list: [
      {
        name: 'Selenium',
        img: 'selenium.png'
      },
      {
        name: 'Jest',
        img: 'jest.png'
      },
      {
        name: 'React Testing Library',
        img: 'rtl.png'
      },
    ]
  },
]

const Tech = () =>
<Section name={`Tech`} fluid background={`linear-gradient(165.45deg, #6966FF 2.2%, #00b7ca 97.12%) `} className="p-5" style={styles.roundedBottomBorders}>
  <div className="row mx-auto"  style={{ maxWidth: '1440px' }}>
    <div className='col-12 col-md-12'>
      <h3 style={styles.title} className='mb-4'>Tech</h3>
    </div>
    <DisciplineList
      disciplines={DisciplineObject}
    />
  </div>
</Section>

export default Tech
