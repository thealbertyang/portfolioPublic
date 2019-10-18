import React from 'react'

const ButtonAlt = ({ url, className, children }) => {
  return (
    <a href={url} className={`btn btn-outline-primary d-flex align-items-center justify-content-center ${className}`}>
      {children}
    </a>
  );
}

export default ButtonAlt;