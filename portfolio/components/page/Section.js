import React from 'react'

const Section = ({ name, fluid, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, height, className, children }) => {
    return (
        <div 
            className={`
                section 
                ${typeof name !== undefined && name ? `section-${name}` : ''} 
                ${typeof fluid !== undefined && fluid ? `container-fluid` : 'container'} 
                ${typeof className !== undefined && className ? className : ''}
            `} 
            style={{
                backgroundColor: typeof backgroundColor !== undefined && backgroundColor !== undefined ? backgroundColor : null,
                backgroundImage: typeof backgroundImage !== undefined && backgroundImage !== undefined ? `url(${backgroundImage})` : null,
                backgroundSize:  typeof backgroundSize !== undefined && backgroundSize !== undefined ? backgroundSize : 'center center',
                backgroundPosition: typeof backgroundPosition !== undefined && backgroundPosition !== undefined ? backgroundPosition : 'cover',
                backgroundRepeat: 'no-repeat',
                height: typeof height !== undefined && height !== undefined ? height : 'auto'
            }
        }>
            {children}
        </div>
    )
}

export default Section;