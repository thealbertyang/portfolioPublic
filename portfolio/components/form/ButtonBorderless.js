import React from 'react'

const ButtonBorderless = ({ url, className, children }) => {
  return (
    <a href={url ? url : '#'} className={`btn ${className ? className : ''}`}>
      {children}
    </a>
  );
}

export default ButtonBorderless;