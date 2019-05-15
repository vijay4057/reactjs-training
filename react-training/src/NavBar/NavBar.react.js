import React from 'react';

import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link exact to='/'>Training</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default NavBar;