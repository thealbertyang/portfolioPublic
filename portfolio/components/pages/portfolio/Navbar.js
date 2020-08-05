import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './Navbar.module.scss'

const Navbar = () => {
    const windowBack = e => {
        e.preventDefault()
        window.history.back()
    }

    return <nav 
        className={`
            navbar 
            navbar-expand-lg 
            d-flex 
            flex-row 
            align-items-center 
            px-2
            py-3
            position-fixed 
            w-100
            ${styles.bg}
        `}
    >
    <nav className="col-4">
        <a className="text-white" href="#" onClick={windowBack}>
            <FontAwesomeIcon
                icon={faArrowLeft}
                size="3x"
            />
        </a>
    </nav>
    <nav className="col-4 col-md-4 d-flex align=items-center justify-content-center mb-0" >
        <a href="/" className={styles.name}>Albert Yang</a>
    </nav>
    <nav className="col-4 col-md-4 d-flex align=items-center justify-content-end">
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