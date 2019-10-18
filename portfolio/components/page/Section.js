import React from 'react'

const Section = ({ name, fluid, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, height, className, children }) => {
    return (
        <div 
            className={`
                section 
                ${typeof name !== undefined ? `section-${name}` : ''} 
                ${typeof fluid !== undefined && fluid ? `containter-fluid` : 'container'} 
                ${typeof className !== undefined ? className : ''}
            `} 
            style={{
                backgroundColor: typeof backgroundColor !== undefined && backgroundImage !== '' ? backgroundColor : null,
                backgroundImage: typeof backgroundImage !== undefined && backgroundImage !== '' ? `url( ${backgroundImage} )` : null,
                backgroundSize:  typeof backgroundSize !== undefined ? backgroundSize : 'center center',
                backgroundPosition: typeof backgroundPosition !== undefined ? backgroundPosition : 'cover',
                backgroundRepeat: 'no-repeat',
                height: typeof height !== undefined ? height : 'auto'
            }
        }>
            {children}
        </div>
    )
}

export default Section;