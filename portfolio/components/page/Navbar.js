import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom">
            <h5 className="my-0 mr-md-4 font-weight-normal navbar-brand"><a href="/">TheAlbertYang</a></h5>
            <nav className="my-2 my-md-0 ml-md-auto">
                <a className="p-2 text-dark" href="/portfolio">Portfolio</a>
                <a className="p-2 text-dark" href="/about">About</a>
                <a className="p-2 text-dark" href="/contact">Contact</a>
            </nav>
        </nav>
    );
}

export default Navbar;