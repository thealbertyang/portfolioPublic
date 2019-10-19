import React from 'react'

const Button = ({ url, className, children }) => {
  return (
    <a href={url ? url : '#'} className={`btn btn-primary d-flex align-items-center justify-content-center ${className}`}>
      {children}
    </a>
  );
}

export default Button;