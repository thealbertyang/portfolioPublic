import React from 'react'

import Overline from '../typography/Overline'

const styles = {
    name: {
        fontFamily: 'Graphik',
        fontStyle: 'italic',
        fontSize: '96px',
    }
}

const Header = ({ children, overlineClassName, overlineText, titleClassName, titleText, backgroundImage, backgroundColor, height }) => {
    return ( 
        <div 
            className="container-fluid" 
            style={{ 
                backgroundImage: typeof backgroundImage !== 'undefined' ? `url(${backgroundImage})` : '',
                backgroundColor: typeof backgroundColor !== 'undefined' ? backgroundColor : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container py-5">
                <div className="row">
                    <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{ height: height }}>
                        <Overline className={`${overlineClassName}`}>{overlineText}</Overline>
                        <h1 className={`${titleClassName}`} style={styles.name}>{titleText}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;