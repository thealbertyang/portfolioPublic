import React from 'react'

const Section = ({ name, fluid, background, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, height, className, children, style }) => {
    return (
        <div 
            className={`
                section 
                ${typeof name !== 'undefined' ? `section-${name}` : ''} 
                ${typeof fluid !== 'undefined' ? `container-fluid` : 'container'} 
                ${typeof className !== 'undefined' ? className : ''}
            `} 
            style={{
                backgroundColor: typeof backgroundColor !== 'undefined' ? backgroundColor : null,
                backgroundImage: typeof backgroundImage !== 'undefined' ? `url(${backgroundImage})` : null,
                backgroundSize:  typeof backgroundSize !== 'undefined' ? backgroundSize : 'center center',
                backgroundPosition: typeof backgroundPosition !== 'undefined' ? backgroundPosition : 'cover',
                backgroundRepeat: 'no-repeat',
                ...(typeof background !== 'undefined' ? { background } : null),
                height: typeof height !== 'undefined' ? height : 'auto',
                ...style
            }
        }>
            {children}
        </div>
    )
}

export default Section;