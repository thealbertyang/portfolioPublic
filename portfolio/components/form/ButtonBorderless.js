import React from 'react'

const ButtonBorderless = ({ url, className, children, onClick }) => {
  return (
    <a href={url ? url : '#'} className={`btn ${className ? className : ''}`} onClick={onClick}>
      {children}
    </a>
  );
}

export default ButtonBorderless;