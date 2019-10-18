import React from 'react'

const Card = ({ slug, background, logo }) =>
  <div className="card shadow border-0">
    <a href={getUrl(slug)} className="portfolio-link">
      <div className="portfolio-bg" style={{ background: getBackground(background) }}></div>
      <div className="portfolio-logo" style={{ height: '300px' }}>
        <img src={getLogo(logo)} />
      </div>
    </a>
  </div>

const getBackground = image =>
  typeof typeof image !== undefined && image !== ''
  ? `url(${image}) center center / cover no-repeat`
  : 'url(/img/shop/products/blue-navy-dress.jpg) center center / cover no-repeat'

const getLogo = image =>
  typeof typeof image !== 'undefined' && image !== ''
  ? image
  : 'https://thealbertyang.com/img/portfolio/otis-logo.png'

const getUrl = url =>
  typeof url !== undefined
  ? `/portfolio/${url}`
  : '#'

export default Card