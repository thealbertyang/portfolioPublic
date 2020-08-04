import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

const styles = {
    name: {
        fontSize: '24px',
        fontFamily: 'Raleway',
        fontWeight: '400',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '1em',
        color: 'rgba(255, 255, 255, 0.75)',
    },
    bg: {
        background: 'linear-gradient(180deg, rgba(114, 114, 114, 0.75) 0%, rgba(31, 31, 31, 0) 100%)'
    }
}

const Navbar = () => {
    const windowBack = e => {
        e.preventDefault()
        window.history.back()
    }

    return <nav 
        className="
            navbar 
            navbar-expand-lg 
            d-flex 
            flex-row 
            align-items-center 
            px-2
            py-3
            position-fixed 
            w-100
        " 
        style={styles.bg}
    >
    <nav className="col-4 order-2 order-md-1">
        <a className="text-white" href="#" onClick={windowBack}>
            <FontAwesomeIcon
                icon={faArrowLeft}
                size="3x"
            />
        </a>
    </nav>
    <nav className="col-12 order-1 order-md-2 col-md-4 d-flex align=items-center justify-content-center mb-0" >
        <a href="/" style={styles.name}>Albert Yang</a>
    </nav>
    <nav className="col-4 order-3 order-md-3 col-md-4 d-flex align=items-center justify-content-end">
        <a className="text-white" href="/portfolio">
            <FontAwesomeIcon
                icon={faExternalLinkSquareAlt}
                size="3x"
            />
        </a>
    </nav>
</nav>
}

export default Navbar